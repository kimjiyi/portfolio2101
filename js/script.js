const $indicators = document.querySelectorAll('.slides-pagination>li>a');
const $container = document.querySelector('.portfolio-wrapper');
const $btnPrev = document.querySelector('.prev');
const $btnNext = document.querySelector('.next');


let nowIdx = 0;//현재 보여지고 있는 슬라이드의 인덱스 번호
let intervalKey = null;

//인디케이터에 대한 클릭이벤트 구문
$indicators.forEach(function($indicator, idx){
    $indicator.addEventListener('click', function(evt){
        evt.preventDefault();

        nowIdx = idx;
        
        //컨테이너 이동
        $container.style.marginLeft = -(100*nowIdx) + '%';

        //활성화표시
        $indicators.forEach(function(anchor, actIdx){
            anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
        });
    });
});


//이전버튼에 대한 클릭이벤트 구문
$btnPrev.addEventListener('click', function(evt){
    evt.preventDefault();


    if(nowIdx>0){
        nowIdx--;
    }else{
        nowIdx=2;
    }

    //컨테이너 이동
    $container.style.marginLeft = -(100*nowIdx) + '%';


    //활성화표시
    $indicators.forEach(function(anchor, actIdx){
        anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
    });

});


//다음버튼에 대한 클릭이벤트 구문
$btnNext.addEventListener('click', function(evt){
    evt.preventDefault();

    
    if(nowIdx<2){
        nowIdx++;
    }else{
        nowIdx=0;
    }

    //컨테이너 이동
    $container.style.marginLeft = -(100*nowIdx) + '%';


    //활성화표시
    $indicators.forEach(function(anchor, actIdx){
        anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
    });
 
});



// 스크롤시 부드럽게
// class Scrooth {
//   constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
//     this.element = element;
//     this.distance = strength;
//     this.acceleration = acceleration;
//     this.deceleration = deceleration;
//     this.running = false;

//     this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
//     this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
//     this.scroll = this.scroll.bind(this);
//   }

//   scrollHandler(e) {
//     e.preventDefault();

//     if (!this.running) {
//       this.top = this.element.pageYOffset || this.element.scrollTop || 0;
//       this.running = true;
//       this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
//       this.isDistanceAsc = true;
//       this.scroll();
//     } else {
//       this.isDistanceAsc = false;
//       this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
//     }
//   }

//   scroll() {
//     if (this.running) {
//       this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
//       Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
//       Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;

//       this.top += this.currentDistance;
//       this.element.scrollTo(0, this.top);
      
//       requestAnimationFrame(this.scroll);
//     }
//   }
// }

// const scroll = new Scrooth({
//   element: window,
//   strength: 20,
//   acceleration: 1.5,
//   deceleration: 0.975,
// });




//네비게이션
const $header = document.querySelector('section');
const $mnus = document.querySelectorAll('#wrap > nav > .gnb > li > a ');//메뉴 셀렉팅

//배열은 여러 데이터를 한번에 저장, 관리
const arrTopVal = [];//각 article의 top 값 [0,1000,1845,2645,3245]


//맨처음 로딩시
let navnowIdx = 0;
let navoldIdx = navnowIdx;


//.offsetTop : 어떤 요소의 top값(body의 시작점으로부터의 거리)
//전자동으로 article의 top값을 가져와 배열에 추가
document.querySelectorAll('section').forEach(function($section, idx){
    arrTopVal[idx] = $section.offsetTop;
});

console.log('arrTopVal =',arrTopVal);


//메뉴에 대한 click 이벤트 구문
$mnus.forEach(function($mnu, idx){
    $mnu.addEventListener('click', function(evt){
        evt.preventDefault();

        //스크롤바의 top값을 설정
        //여기에는 헤더값의 높이값 영역만큼 줘야지 메뉴를 눌렀을때 딱 top값에 붙음
        window.scrollTo({top:arrTopVal[idx], behavior:'smooth'});
    });
});


//window 객체에 대한 scroll 이벤트 구문
window.addEventListener('scroll', function(){
    
    //현재 스크롤바의 top값
    
    const scrollTop = Math.ceil(window.scrollY);//scrollTop값에 소수점이 발생했을 때 해결
    console.log(`scrollTop = ${scrollTop}`);

    //for문을 이용하여 5개의 if구문을 하나로 합침
    for(let i=0;i<$mnus.length;i++){

        //-66이아니라 -166을 준 이유는 활성화가 된 영역보다 화면에 보여지는 영역부분이 더 많이 해당되므로 위로 높이값을 더 할당시켜 활성화표시가 넘어오도록표시함
        if(scrollTop >= arrTopVal[i]){

          navoldIdx = navnowIdx;
          navnowIdx = i;
    
            //활성화 표시
            $mnus[navoldIdx].parentElement.classList.remove('on');
            $mnus[navnowIdx].parentElement.classList.add('on');

            //-66이아니라 -166을 준 이유는 활성화가 된 영역보다 화면에 보여지는 영역부분이 더 많이 해당되므로 위로 높이값을 더 할당시켜 활성화표시가 넘어오도록표시함
        }else if(scrollTop < arrTopVal[0]){
            $mnus[navnowIdx].parentElement.classList.remove('on');
        }
    }
});


//로고에 대한 click 이벤트 구문
document.querySelector('.logo>a').addEventListener('click', function(evt){
  evt.preventDefault();
  $top.click();
});
