import speakers from './dataFile.js';

const qs = (selector = '*', element = document) => element.querySelector(selector);

const mobileMenu = qs('.hamburger-menu');
const navLinks = qs('.nav-links');
const featureSpeaker = qs('.speakers-container');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-active');
  navLinks.classList.toggle('is-active');
});

navLinks.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-active');
  navLinks.classList.toggle('is-active');
});

Object.keys(speakers).forEach((eachSpeaker) => {
  if (Object.hasOwnProperty.call(speakers, eachSpeaker)) {
    const speaker = speakers[eachSpeaker];
    featureSpeaker.innerHTML += `<div class="each-speaker">
    <div class="speaker-img-holder">
      <img
        class="speaker-img"
        src="${speaker.image}"
        alt="${speaker.name} image"
      />
    </div>
    <article class="speaker-desc">
      <h2 class="header-desc">${speaker.name}</h2>
      <small class="parag-desc"
        >${speaker.title}</small>
      <span class="line"></span>
      <p class="speaker-full-desc">
        ${speaker.description}
      </p>
    </article>
  </div>`;
  }
});