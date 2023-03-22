//SWIPER CODE

const element = document.querySelector(".home-learn_blog");

let projectSwiper = new Swiper(element.querySelector(".swiper"), {
  direction: "horizontal",
  loop: false,
  mousewheel: false,
  keyboard: true,
  centeredSlides: false,
  effect: "slide",
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  speed: 1000,
  navigation: {
    nextEl: element.querySelector(".is-next"),
    prevEl: element.querySelector(".is-prev"),
    disabledClass: "inactive"
  }
});
