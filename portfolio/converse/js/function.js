const $topContainer = document.querySelector('.top-banner-list');
const $topIndicator = document.querySelectorAll('.top-banner-list > li > a ');
const $topBtnPrev = document.querySelector('.top-banner-wrap > .slides-navigation.prev');
const $topBtnNext = document.querySelector('.top-banner-wrap > .slides-navigation.next');


let topNowIdx = 1;
let topOldIdx = topNowIdx;

$topContainer.style.transition = 'all 0.4s ease-in-out';

$topIndicator.forEach(function($indicator, idx){
    $indicator.addEventListener('click', function(evt){
        evt.preventDefault();

        topOldIdx = topNowIdx;
        topNowIdx = idx;
        console.log(`topOldIdx = ${topOldIdx}`);
        console.log(`topNowIdx = ${topNowIdx}`);

        //컨테이너 이동
        $topContainer.style.marginTop = -50*topNowIdx + 'px';
    });
});

//이전버튼
$topBtnPrev.addEventListener('click', function(evt){
    evt.preventDefault();

    topOldIdx = topNowIdx;
    topNowIdx--;

    //컨테이너 이동
    $topContainer.style.marginTop = -50*topNowIdx + 'px';

    if(topNowIdx===0){
        setTimeout(function(){
            //오른쪽 끝에 있는 슬라이드가 보이도록 이동
            $topContainer.style.transition = 'none';
            $topContainer.style.marginTop = -50*5 + 'px';

            setTimeout(function(){
              $topContainer.style.transition = 'all 0.4s ease-in-out';
            },100);
        },400);

        topNowIdx = 5;
    }//end of if
});

//다음버튼
$topBtnNext.addEventListener('click', function(evt){
    evt.preventDefault();

    topOldIdx = topNowIdx;
    topNowIdx++;

    //컨테이너 이동
    $topContainer.style.marginTop = -50*topNowIdx + 'px';

    if(topNowIdx===6){
        setTimeout(function(){
            //오른쪽 끝에 있는 슬라이드가 보이도록 이동
            $topContainer.style.transition = 'none';
            $topContainer.style.marginTop = -50*1 + 'px';

            setTimeout(function(){
              $topContainer.style.transition = 'all 0.4s ease-in-out';
            },100);
        },400);

        topNowIdx = 1;
    }//end of if
});

let topIntervalKey = null;

window.addEventListener('load', function(){
  topIntervalKey = setInterval(function(){
    $topBtnNext.click();//이벤트강제발생
  },2000);
});


//비디오
function videoUrl(url) {
  document.getElementById("video-slider").src = "media/" + url;
}


const $indicators = document.querySelectorAll(' .video-navigation > li > video');
const $sideBanrs = document.querySelectorAll('.video-text-wrapper');

let nowIdx = 0;
let oldIdx = nowIdx;

$indicators.forEach(function($indicator, idx){
  $indicator.addEventListener('click',function(evt){
    evt.preventDefault();

    oldIdx = nowIdx;
    nowIdx = idx;
    //모든 슬라이드 숨김, 인디케이터 비활성화
    for(let i=0;i<$indicators.length;i++){
      $sideBanrs[i].style.display = 'none';
      $indicators[i].parentElement.classList.remove('on');
    }

    $sideBanrs[nowIdx].style.display = 'block';
    $indicators[nowIdx].parentElement.classList.add('on');

    //모든 사이드배너를 제자리로 이동
    $sideBanrs.forEach(function($sideBanr){
      $sideBanr.style.marginLeft = '-9999px';
      $sideBanr.style.display = 'none';
    });

    //슬라이드에 해당하는 사이드배너 노출
    $sideBanrs[nowIdx].style.display = 'block';
    setTimeout(function(){
      $sideBanrs[nowIdx].style.marginLeft = '';
    },400);
  });
});





//배너슬라이드
const $bannercontainer = document.querySelectorAll('.banner-wrap > .banner-slide > .banner-slide-container > .slide-wrap ');
const $bannerPrev = document.querySelector(' .banner-wrap > .text-box > .slides-navigation.prev');
const $bannerNext = document.querySelector(' .banner-wrap > .text-box > .slides-navigation.next');
const $bannerindicators = document.querySelectorAll('.slides-pagination>li>a');

let bannerNowIdx = 0;

const fadeAction = function(bannerNowIdx){
  //모든 슬라이드 숨김, 인디케이터 비활성화
  for(let i=0;i<$indicators.length;i++){
      $bannercontainer[i].style.display = 'none';
      $bannerindicators[i].parentElement.classList.remove('on');
  }

  //해당 슬라이드 노출, 인디케이터 활성화
  $bannercontainer[bannerNowIdx].style.display = 'block';
  $bannerindicators[bannerNowIdx].parentElement.classList.add('on');
};

//인디케이터에 대한 click 이벤트 구문
$bannerindicators.forEach(function($indicator,idx){
$indicator.addEventListener('click', function(evt){
  evt.preventDefault();
  bannerNowIdx = idx;
  fadeAction(bannerNowIdx);//fade 변환함수 호출
});
});


//다음버튼에 대한 click 이벤트 구문
$bannerNext.addEventListener('click', function(evt){
evt.preventDefault();
//nowIdx가$indicators.length-1보다 작으면 nowIdx가 1씩 증가하고 그게 아니면 nowIdx=0이된다.
(bannerNowIdx<$bannerindicators.length-1) ? bannerNowIdx++ : bannerNowIdx=0;
fadeAction(bannerNowIdx);
});


//이전버튼에 대한 click 이벤트 구문
$bannerPrev.addEventListener('click', function(evt){
evt.preventDefault();
//nowIdx가 1보다 크면 nowIdx가 1씩 감소하고 그게 아니면 nowIdx가 $indicators.length-1;된다.
// nowIdx>1 ? nowIdx-- : nowIdx=$indicators.length-1;
// 위의 방법은 논리적오류이기때문에 0보다 nowidx가 커야함. 위의 방법은 2,3,4만 해당
bannerNowIdx>0 ? bannerNowIdx-- : bannerNowIdx=$bannerindicators.length-1;
fadeAction(bannerNowIdx);
});



// $bannerPrev.addEventListener('click',function(evt){
//   evt.preventDefault();

//   if(bannerNowIdx>0){
//     bannerNowIdx--;
//   }else{
//     bannerNowIdx=3;
//   }
//   $bannercontainer.style.marginLeft = -1330*bannerNowIdx + 'px';

//   // if(window.width()<=1330){
//   //   $bannercontainer.style.marginLeft = -1330*bannerNowIdx + 'px';

//   // }else{
//   //   $bannercontainer.style.marginLeft = -100*bannerNowIdx + '%';
//   // }

// });


// $bannerNext.addEventListener('click',function(evt){
//   evt.preventDefault();

//   if(bannerNowIdx<3){
//     bannerNowIdx++;
//   }else{
//     bannerNowIdx=0;
// }
// $bannercontainer.style.marginLeft = -1330*bannerNowIdx + 'px';

// // if(window.width()<=1330){
// //   $bannercontainer.style.marginLeft = -100*bannerNowIdx + '%';

// // }else{
// //   $bannercontainer.style.marginLeft = -100*bannerNowIdx + '%';
// // }

// });

let nowArr = 0;
let intervalKey = null;

const autoPlay = function(){
  clearInterval(intervalKey);//인터벌 중지

  //자동실행 코드
  intervalKey = setInterval(function(){
    $bannerNext.click();        
  },5000)
};

// autoPlay();




//카운트다운
const newDday = '1 jan 2023';

function countdown(){
  const newDdayDate = new Date(newDday);
  const currentDate = new Date();

  const totalSeconds = (newDdayDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  document.getElementById('days').innerText = formatTime(days);
  document.getElementById('hours').innerText = formatTime(hours);
  document.getElementById('minutes').innerText = formatTime(minutes);
  document.getElementById('seconds').innerText = formatTime(seconds);
}

function formatTime(time){
  return time < 10 ? '0' + time : time;
}

setInterval(countdown, 1000);

//무한글자이동
function handleMarquee() {
  const marquee = document.querySelectorAll('.marquee');
  let speed = 2;
  let lastScrollPos = 0;
  let timer;
  marquee.forEach(function(el) {
    const container = el.querySelector('.inner');
    const content = el.querySelector('.inner > *');
    //Get total width
    const elWidth = content.offsetWidth;
    //Duplicate content
    let clone = content.cloneNode(true);
    container.appendChild(clone);
    let progress = 1;
    function loop() {
      progress = progress - speed;
      if(progress <= elWidth * -1) {
        progress = 0;
      }
      container.style.transform = 'translateX(' + progress + 'px)';
      container.style.transform += 'skewX(' + speed * 0.4 + 'deg)';
      window.requestAnimationFrame(loop);
    }
    loop();
  });
  window.addEventListener('scroll', function() {
    const maxScrollValue = 12;
    const newScrollPos = window.scrollY;
    // let scrollValue = newScrollPos - lastScrollPos;
    // if(scrollValue > maxScrollValue) scrollValue = maxScrollValue;
    // else if(scrollValue < -maxScrollValue) scrollValue = -maxScrollValue;
    // speed = scrollValue;
    clearTimeout(timer);
    timer = setTimeout(handleSpeedClear, 200);
  });
  function handleSpeedClear() {
    speed = 2;
  }
};
handleMarquee();



//GNB
const $gnbButton = document.querySelector('#showMenu');
const $gnbNav = document.querySelector('nav');
const $lightbox = document.querySelector('.lightbox');
const $shadow = document.querySelector('.shadow');

$gnbButton.addEventListener('click', function(){
  if($gnbNav.style.display==='none'){
    $gnbButton.style.right = '70%';
    $gnbNav.style.display = 'block';
    $shadow.style.display = 'block';
 }else{
  $gnbButton.style.right = '';
  $gnbNav.style.display = 'none';
  $shadow.style.display = 'none';
 }
});



$shadow.addEventListener('click', function(){
  this.style.display = 'none';
  if($gnbNav.style.display==='none'){
    $gnbButton.style.right = '70%';
    $gnbNav.style.display = 'block';
    $shadow.style.display = 'block';
 }else{
  $gnbButton.style.right = '';
  $gnbNav.style.display = 'none';
  $shadow.style.display = 'none';
 }
});



document.addEventListener('keyup', function(evt){
    console.log(`현재 눌린 키번호는 ${evt.which}`);
    if(evt.which === 27){
        if($gnbNav.style.display==='none'){
          $gnbButton.style.right = '500px';
          $gnbNav.style.display = 'block';
          $shadow.style.display = 'block';
        }else{
        $gnbButton.style.right = '';
        $gnbNav.style.display = 'none';
        $shadow.style.display = 'none';
        }
        $shadow.style.display = 'none';
        
    }
});


//사이드메뉴 추천상품
const $nav = document.querySelector('nav')
const $sideMenu1 = document.querySelector('#wrap > header > nav > ul.gnb > li:nth-child(1)');
const $sideMenu2 = document.querySelector('#wrap > header > nav > ul.gnb > li:nth-child(2)');
const $sideMenu3 = document.querySelector('#wrap > header > nav > ul.gnb > li:nth-child(3)');
const $sideLnb = document.querySelector('#wrap > header > nav > ul.gnb > li > .lnb > li  ')
const $sideRecommend1 = document.querySelector('.recommend-shoes');
const $sideRecommend2 = document.querySelector('.recommend-clothes');
const $sideRecommend3 = document.querySelector('.recommend-baby');


$sideMenu1.addEventListener('mouseover',function(){
  $sideRecommend1.style.display = 'flex';
  $sideRecommend2.style.display = 'none';
  $sideRecommend3.style.display = 'none';
});

$sideMenu2.addEventListener('mouseover',function(){
  $sideRecommend2.style.display = 'flex';
  $sideRecommend3.style.display = 'none';
  $sideRecommend1.style.display = 'none';
});


$sideMenu3.addEventListener('mouseover',function(){
  $sideRecommend3.style.display = 'flex';
  $sideRecommend1.style.display = 'none';
  $sideRecommend2.style.display = 'none';
  
});


$nav.addEventListener('mousedown',function(){
  $sideRecommend1.style.display = 'none';
  $sideRecommend2.style.display = 'none';
  $sideRecommend3.style.display = 'none';
});
