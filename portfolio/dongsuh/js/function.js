const $btnGnb = $('#wrap > header > .header-wrap > .btn-gnb');
const $nav = $('#wrap > header > .header-wrap > nav');
const $mnu = $('#wrap > header > .header-wrap > nav > .gnb > li > a');
const $lnb = $('#wrap > header > .header-wrap > nav > .gnb > li > .lnb');

const $wrap = $('#wrap')


//모바일에서 메뉴 닫아도 pc에서 다시 보이게하기
$(window).on('load resize', function(){
  if(window.innerWidth>1430){//PC모드
      $nav.show();
  }else{//모바일
      $btnGnb.removeClass('clse');
      $nav.hide();
  }
});



//햄버거버튼(모바일)
$btnGnb.on('click', function(){
  $(this).toggleClass('clse');
  $nav.toggle();
});

$mnu.on('click', function(){
  ($lnb).not($(this).next($lnb).slideToggle(300)).slideUp();
  $(document).mouseup(function (e){
    if(($lnb).has(e.target).length === 0){
      ($lnb).hide();
    }
  });
});


