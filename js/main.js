// Navigation functionality
let hamburger = document.querySelector('.fa-bars');
let ul = document.querySelector('ul');
let closeIcon = document.querySelector('.fa-times-circle');
let faded = document.querySelectorAll('.fade');

hamburger.addEventListener('click', () => {
  ul.classList.add('is-visible');
});

closeIcon.addEventListener('click', () => {
  ul.classList.remove('is-visible');
});



// animations for fading in and resizing: https://eddyerburgh.me/animate-elements-scrolled-view-vanilla-js

const animateHTML = () => {
  let elems;
  let windowHeight;
  const init = () => {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  const addEventHandlers = () => {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  const checkPosition = () => {
    for (let i = 0; i < elems.length; i++) {
      let positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden',
          'fade-in-element'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();

// function that increases/decreases opacity of a background color on scroll
const fadeDivs = () => {
  const blackout = document.querySelector('#blackout');
  const whiteout = document.querySelector('#whiteout');
  var scrolled = window.pageYOffset;
  blackout.style.backgroundColor = 'rgba(0, 0, 0, ' + (0+(scrolled/500));
  whiteout.style.backgroundColor = 'rgba(255, 255, 255, ' + (document.body.offsetHeight-(window.innerHeight+window.pageYOffset))/500;
}

// function for showing hidden elements on scroll
const scrollAppear = () => {
  for (let i = 0; i <faded.length; i++) {
    let introPos = faded[i].getBoundingClientRect().top;
    let screenPos = window.innerHeight/1.18;
    if (introPos < screenPos ) {
      faded[i].classList.add('fade-in');
    }
  }
}

const windowEvents = () => {
  scrollAppear();
  fadeDivs();
}

window.addEventListener('scroll', windowEvents);
