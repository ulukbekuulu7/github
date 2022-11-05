const swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});
//
// const toggleButton = document.querySelector('.toggle-menu');
// const navBar = document.querySelector('.nav-bar');
// toggleButton.addEventListener('click', function () {
//     navBar.classList.toggle('toggle');
// });