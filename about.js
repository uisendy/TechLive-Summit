const qs = (selector = '*', element = document) => element.querySelector(selector);

const mobileMenu = qs('.hamburger-menu');
const navLinks = qs('.nav-links');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-active');
  navLinks.classList.toggle('is-active');
});

navLinks.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-active');
  navLinks.classList.toggle('is-active');
});