const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

if (window.matchMedia("(min-width: 400px)").matches) {
let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}