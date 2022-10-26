var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoint: {
    640: {sildesPerView:1,},
    960: {sildesPerView:1,},
    1430: {sildesPerView:1,}
  },
});

var swiper2 = new Swiper(".main-slides", {
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoint: {
    640: {sildesPerView:1,},
    960: {sildesPerView:1,},
    1430: {sildesPerView:1,}
  },
});