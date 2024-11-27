// JavaScript Document
const navHoverLink = document.querySelector('.nav_hover_link');
const menu = document.querySelector('.menu');

navHoverLink.addEventListener('click', () => {
    menu.classList.toggle('active');
});
