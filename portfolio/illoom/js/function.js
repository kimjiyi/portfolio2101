



//네비게이션
const $gnb = document.querySelector('#wrap > header > nav > .gnb');
const $lnbs = document.querySelectorAll('#wrap > header > nav > .gnb > li > .lnb');
const $bg_lnb = document.querySelector('.bg_lnb');


//메인슬라이더
const $container = document.querySelector('#wrap .slides > .slides-container');
const $indicators = document.querySelectorAll('#wrap .slides > .slides-pagination > li > a');
const $btnPrev = document.querySelector('#wrap .slides > .slides-navigation.prev');
const $btnNext = document.querySelector('#wrap .slides > .slides-navigation.next');
const $btnAuto = document.querySelector('#wrap .slides > .btn_auto');

//리뷰슬라이드
const $reviewPrev = document.querySelector('#wrap > section .review_container > .review_slide > .review-slides-navigation.review-slides-previous');
const $reviewNext = document.querySelector('#wrap > section .review_container > .review_slide > .review-slides-navigation.review-slides-next');    
const $reviewContainer = document.querySelector('#wrap > section .review_container > .review_slide > .review_item');


//aside메뉴
const $aside = document.querySelector('aside');



//네비게이션 이벤트구문
const navFadeIn = function(){
    $bg_lnb.style.display = 'block';
    $lnbs.forEach(function($lnb){
        $lnb.style.display = 'block';
    });
};

const navFadeOut = function(){
    $bg_lnb.style.display = 'none';
    $lnbs.forEach(function($lnb){
        $lnb.style.display = 'none';
    });   
};

$gnb.addEventListener('mouseenter', function(){
    navFadeIn();
});

$gnb.addEventListener('mouseleave', function(){
    navFadeOut();      
});

//서브메뉴의 백판
$bg_lnb.addEventListener('mouseenter', function(){
    navFadeIn();
});

$bg_lnb.addEventListener('mouseleave', function(){
    navFadeOut();      
});



//메인슬라이더
//자동실행
let intervalKey = null;

let nowIdx = 1;
let oldIdx = nowIdx;

$indicators.forEach(function($indicator, idx){
    $indicator.addEventListener('click', function(evt){
        evt.preventDefault();

        //보여지는 슬라이더 앞 뒤로 마지막,처음 슬라이드를 깔아뒀기 때문에 인디케이터와 인덱스 값이 불일치해서 -1, +1해서 인덱스값을 맞춰줌
        oldIdx = nowIdx-1;
        nowIdx = idx+1;
        console.log(`oldIdx = ${oldIdx}`);
        console.log(`nowIdx = ${nowIdx}`);

        //활성표시 - on추가
        $indicators[idx].parentElement.classList.add('on');

        //활성표시 - on제거
        $indicators[oldIdx].parentElement.classList.remove('on');

        //컨테이너 이동
        $container.style.left = -100*nowIdx + '%';
    });
});

//이전버튼
$btnPrev.addEventListener('click', function(evt){
    evt.preventDefault();

    oldIdx = nowIdx;
    nowIdx--;

    //컨테이너 이동
    $container.style.left = -100*nowIdx + '%';

    //이전버튼을 눌렀을때 마지막 이미지가 보여짐과 동시에 인덱스 nowIdx = 5가 보여지게 눈속임을 하고 실제로 nowIdx=5가 보여지게한다
    //nowIdx===0 보여지는 슬라이드 이 전에 깔아놨던 이미지
    if(nowIdx===0){
        setTimeout(function(){
            //트렌지션이 걸려있으면 눈속임을 할 시 이미지가 다 보여지게돼서 일단 없애줌
            //오른쪽 끝에 있는 슬라이드가 보이도록 이동
            $container.style.transition = 'none';
            $container.style.left = -100*5 + '%';


            //위에 한번 없어지면 트렌지션이 안걸리므로 다시 걸어준다
            setTimeout(function(){
                $container.style.transition = 'all 0.4s ease-in-out';
            },100);
        },400);

        nowIdx = 5;
    }//end of if

    //인디케이터 활성표시 - if구문 안에 있으면 활성이 안됨
    $indicators[nowIdx-1].parentElement.classList.add('on');
    $indicators[oldIdx-1].parentElement.classList.remove('on');
});

//다음버튼
$btnNext.addEventListener('click', function(evt){
  evt.preventDefault();

  oldIdx = nowIdx;
  nowIdx++;

  $container.style.left = -100*nowIdx + '%';

  if(nowIdx===6){
      setTimeout(function(){
          $container.style.transition = 'none';
          //nowIdx가 6이되자마자 1이 될때 nowIdx=0에서 한칸만 이동하면 되므로
          $container.style.left = -100*1 + '%';

          setTimeout(function(){
              $container.style.transition = 'all 0.4s ease-in-out';
          },100);
      },400);

      nowIdx = 1;
  }//end of if

  $indicators[nowIdx-1].parentElement.classList.add('on');
  $indicators[oldIdx-1].parentElement.classList.remove('on');
});


//재생버튼
$btnAuto.addEventListener('click',function(){
  if(this.classList.contains('pause')){//play 중이면
    this.classList.remove('pause');
    clearInterval(intervalKey);
  }else{
    this.classList.add('pause');

    intervalKey = setInterval(function(){
      $btnNext.click();
    },5000);  
  }
});

//자동재생
//load는 이미지와 텍스트가 화면에 동시에 나타나는 시점에
window.addEventListener('load', function(){
  intervalKey = setInterval(function(){
    $btnNext.click();//이벤트 강제발생
  },5000);
});


//리뷰슬라이드
let reviewIdx = 0;

$reviewPrev.addEventListener('click',function(evt){
  evt.preventDefault();

  if(reviewIdx>0){
    reviewIdx--;
  }else{
    reviewIdx=1;
  }
  $reviewContainer.style.marginLeft = -1200*reviewIdx + 'px';
});

$reviewNext.addEventListener('click',function(evt){
  evt.preventDefault();

  if(reviewIdx<1){
    reviewIdx++;
  }else{
    reviewIdx=0;
  }
  $reviewContainer.style.marginLeft = -1200*reviewIdx + 'px';
});




//어사이드 이벤트구문
window.addEventListener('scroll', function(){
    
    const scrollTop = Math.ceil(window.scrollY);//현재 스크롤바의 top값


    /**
     * 스크롤바를 내렸을때 footer가 노출되는 시점의 scrollTop값과
     * 브라우저의 innerHeight를 더한 값에 footer의 offsetTop 값을 빼면
     * 정확히 0이 나온다.
     * 
     * 만약 스크롤바를 더 내리면 결과값이 +(양수)가 나오는 성질을 이용.
     * 즉, view값이 양수이면 footer가 노출됐다는 것을 의미한다.
     */
    //aside이벤트
    //$를 안붙인건 돔선택을 안할거기때문
    const footDist = document.querySelector('footer').offsetTop; // 고정값
    const view = (scrollTop+window.innerHeight) - footDist; //(a+b)-footDist = 음수, 0, 양수

    if(view>0){//footer가 화면에 보인다.
      console.log(`view=${view}`);
      $aside.style.marginBottom = view + 'px';
    }else{
      $aside.style.marginBottom = 0;
    }
  });
  