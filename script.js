// Mobile Menu Set-up

const qs = (selector = '*', element = document) =>{
  return element.querySelector(selector)
}

const qsa = (selector = '*', element = document) => {
  return [...element.querySelector(selector)]
}

const mobileMenu = qs('.hamburger-menu')
const navLinks = qs('.nav-links')

mobileMenu.addEventListener('click', ()=> {
  mobileMenu.classList.toggle('is-active')
  navLinks.classList.toggle('is-active');
});
