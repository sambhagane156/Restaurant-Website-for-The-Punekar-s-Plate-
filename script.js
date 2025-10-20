const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  autoplay: {
    delay: 4000, 
    disableOnInteraction: false, 
  },
  effect: 'fade',
  speed: 1000, 
});

const testimonialSwiper = new Swiper('.testimonial-swiper', {
  loop: true,
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false,
  },
  slidesPerView: 1, 
  spaceBetween: 30,
  speed: 800,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
