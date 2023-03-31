const screenWidth = window.screen.width;
const screenHeight = window.screen.height;


let mql = window.matchMedia('(max-width: 767px)');

window.addEventListener('resize', () => {


let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
})