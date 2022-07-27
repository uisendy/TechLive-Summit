const speakers = {
  one:{
    id: 1,
    image:'./asset/images/Speakers/1.png',
    name: 'Kamelia Aryafar',
    title: 'Chief Algorithms and Analytics Officer at Google',
    description:'Kamelia Aryafar, one of the top women in tech today. Her focus is on building Google Cloud AI solutions for different industries by leveraging her expertise in machine learning',
  },
  two:{
    id: 2,
    image:'./asset/images/Speakers/2.png',
    name: 'Maria Raga',
    title: 'Founder, Depop App',
    description:'Maria created Depop, a fashion app that enables its users to sell second-hand clothes . It is super trendy, with over 140,000 items on sale every day! Defined as “a fashion marketplace for the next generation',
  },
  three:{
    id: 3,
    image:'./asset/images/Speakers/3.png',
    name: 'Shola Akinlade',
    title: 'Founder, Paystack App',
    description:'Most widely used payment platform in Africa. His mission is deliver a safe, convenient and modern payment experience for customers and merchants in Africa',
  },
  four:{
    id: 4,
    image:'./asset/images/Speakers/4.png',
    name: 'Rediet Abede',
    title: 'Assistant Professor of Computer Science',
    description:'Rediet dedicates her time to algorithms and artificial intelligence, she has found a way to utilize emerging technologies to make the world a better place.',
  },
  five:{
    id: 5,
    image:'./asset/images/Speakers/5.png',
    name: 'Dabiel Ek',
    title: 'CEO, Spotify',
    description:'Daniel Ek is a Swedish billionaire entrepreneur and technologist. He is the co-founder and CEO of music streaming service Spotify',
  },
  six:{
    id: 6,
    image:'./asset/images/Speakers/6.png',
    name: 'Zhou Qunfei',
    title: 'Chinese Entrepreneur',
    description:'Zhou Qunfei is a Chinese entrepreneur who founded the major touchscreen maker Lens Technology',
  }
};


const qs = (selector = '*', element = document) => {
  return element.querySelector(selector)
}

const qsa = (selector = '*', element = document) => {
  return [...element.querySelector(selector)]
}

const mobileMenu = qs('.hamburger-menu')
const navLinks = qs('.nav-links')
const featureSpeaker = qs('.speakers-container')


mobileMenu.addEventListener('click', ()=> {
  mobileMenu.classList.toggle('is-active')
  navLinks.classList.toggle('is-active');
});


Object.keys(speakers).forEach((eachSpeaker) => {
  if (Object.hasOwnProperty.call(speakers, eachSpeaker)) {
    const speaker = speakers[eachSpeaker]
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
  </div>`
  }
})

