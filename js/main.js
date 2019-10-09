// (function(){
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

  //disable scrolling when a popup is open
  if (ul.classList.contains('is-visible')) {
    document.querySelector('body').style.overflow = 'hidden';
  }

  //function to close navigation menu after an option is selected
  let navOptions = document.querySelectorAll('ul');
  for (let i = 0; i < navOptions.length; i++) {
    navOptions[i].addEventListener('click', () => {
      ul.classList.remove('is-visible');
    });
  }



  // remove 'showConfirmation' when the close button is clicked
  //closeConfirmation.addEventListener('click', () => {
  //   confirmation.classList.remove('showConfirmation');
  // });


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
    blackout.style.backgroundColor = 'rgba(0, 0, 0, ' + (0+(scrolled/800));
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

  // parallax effect
  const parallax = () => {
    let wScroll = window.pageYOffset;
    Array.from(document.getElementsByClassName('parallax'))[0].style.backgroundPosition =  'center '+(wScroll*-0.2)+'px';
    // document.querySelector('footer').style.backgroundPosition = 'center ' +(wScroll/0.5)+'px';
  }


  const windowEvents = () => {
    scrollAppear();
    fadeDivs();
    parallax();
  }

  window.addEventListener('scroll', windowEvents);

// })();
