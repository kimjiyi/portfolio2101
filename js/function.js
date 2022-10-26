

// //로딩
// const $loading = $('.loading');
// $loading.children('p').fadeOut();
// $loading.delay(350).fadeOut(800,function(){
//   $(this).remove();
// });


//와우 플러그인 세팅
$(window).on('load',function(){
  new WOW().init();
});

//AOS 플로그인 세팅
$(window).on('load',function(){
  AOS.init();
});



// // 메인 브라우저에맞춰 높이조정
// $(document).ready(function() {
//   $("header#intro").height($(window).height());
// }); 









//ability-bar
$(window).on('scroll', function(){
  const scrollTop = $(this).scrollTop();

  const abilityDist = $('.vision-ability-container').offset().top;
  const view = scrollTop + $(this).height() - abilityDist;

  if(view>0){
      const $bar = $('.bar');

      //data-bar 속성값을 읽어와서 width값으로 설정
      for(let i=0;i<$bar.length;i++){
          const value = $bar.eq(i).parent().attr('data-bar')+'%';
          $bar.eq(i).width(value);
      }

  }else{
      $('.vision-ability-container .bar').width(0);
  }
});


//ability-piechart
$('.piechart').on('inview', function(evt, visible){
  if(visible){
      $('.chart').easyPieChart({
          //your configuration goes here
          easing: 'easeInOutCubic',
          delay: 3000,
          barColor:'#027aff',
          trackColor:'rgba(255,255,255,0.2)',
          scaleColor: false,
          lineWidth: 8,
          size: 140,
          animate: 2000,
          onStep: function(from, to, percent) {
              this.el.children[0].innerHTML = Math.round(percent);
          }
      });
  }
});



//라이트박스
const $etcdesign = $('.etcdesign-img');
const $etcdesignVideo = $('.etcdesign-video')
const $lightbox = $('.lightbox');
const $lightboxVideo = $('.lightbox-video');
const $shadow = $('.shadow');
const $shadowVideo = $('.shadow-video');

$etcdesign.on('click', function(evt){
    evt.preventDefault();

    const imgSrc = $(this).attr('href');
    const imgAlt = $(this).children('img').attr('alt');

    
    $lightbox.children('img').attr({
        src : imgSrc,
        alt : imgAlt
    });
    
    $shadow.show();

    $('button.clse').on('click', function(){
        $shadow.hide();
    });
});

$etcdesignVideo.on('click', function(evt){
  evt.preventDefault();

  const videoSrc = $(this).attr('href');
  const videoAlt = $(this).children('video').attr('src');

  
  $lightboxVideo.children('video').attr({
      src : videoSrc,
      alt : videoAlt
  });
  
  $shadowVideo.show();

  $('button.clse-video').on('click', function(){
    $shadowVideo.hide();
  });
});

$shadow.on('click', function(){
    $(this).hide();
});

$lightbox.on('click', function(evt){
    evt.stopPropagation();
});

$(document).on('keyup', function(evt){
    if(evt.which === 27){
        $shadow.hide();
    }
});

$shadowVideo.on('click', function(){
  $(this).hide();
});

$lightboxVideo.on('click', function(evt){
  evt.stopPropagation();
});

$(document).on('keyup', function(evt){
  if(evt.which === 27){
      $shadowVideo.hide();
  }
});



// const $h1 = $('h1');
// const $home = $('#home');
// const $intro = $home.children('.intro');
// const $btnGnb = $('.btn-gnb');
// const $nav = $btnGnb.next();

// $(window).on('load resize', function(){
//     $home.height(window.innerHeight);

//     //가로폭 크기 기준
//     if(window.innerWidth>640){//PC모드
//         $h1.css({
//             top : $intro.offset().top - 72,
//         });

//         $nav.show();
//     }else{//모바일
//         $h1.css({
//             top : $intro.offset().top - 100,
//             marginLeft : -$h1.width()/2
//         });

//         $btnGnb.removeClass('clse');
//         $nav.hide();
//     }

// });


// //햄버거버튼(모바일)
// $btnGnb.on('click',function(){
//   $(this).toggleClass('clse');
//   $nav.toggle();
// });