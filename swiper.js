const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

if (screenWidth < 768) {
let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}