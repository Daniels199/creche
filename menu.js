



// Inicialize o Swiper
var mySwiper = new Swiper('.swiper-container', {
  // Configurações do Swiper, se necessário
});







// Inicialize o Swiper com o nome "swiper-bundle.min"
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1, // Número de slides visíveis por vez
  spaceBetween: 30, // Espaço entre os slides
  loop: true, // Loop infinito
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Permite clicar nos pontos de paginação para navegar
  },
});
