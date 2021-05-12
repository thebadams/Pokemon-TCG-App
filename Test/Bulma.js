var burgerIcon = document.querySelector('#burger');
var navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle('is-active');
});