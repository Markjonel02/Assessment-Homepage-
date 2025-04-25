var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1, // Default for mobile
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Allows users to click pagination bullets
    dynamicBullets: true, // Dynamic pagination effect
  },
  breakpoints: {
    640: { slidesPerView: 2 },  // Tablets
    768: { slidesPerView: 3 },  // Small laptops
    1024: { slidesPerView: 3 }  // Desktops
  }
});