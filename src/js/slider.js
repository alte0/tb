import Swiper from 'swiper/bundle';

new Swiper('.clients__slider', {
  // autoplay: {
  //   delay: 3000,
  // },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
