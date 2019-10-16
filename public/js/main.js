"use strict";

// (function(){
// Navigation functionality
var hamburger = document.querySelector('.fa-bars');
var ul = document.querySelector('ul');
var closeIcon = document.querySelector('.fa-times-circle');
var faded = document.querySelectorAll('.fade');
hamburger.addEventListener('click', function () {
  ul.classList.add('is-visible');
  document.querySelector('body').classList.add('hideOverflow');
});
closeIcon.addEventListener('click', function () {
  ul.classList.remove('is-visible');
  document.querySelector('body').classList.remove('hideOverflow');
}); //function to close navigation menu after an option is selected

var navOptions = document.querySelectorAll('ul');

for (var i = 0; i < navOptions.length; i++) {
  navOptions[i].addEventListener('click', function () {
    ul.classList.remove('is-visible');
    document.querySelector('body').classList.remove('hideOverflow');
  });
} // animations for fading in and resizing: https://eddyerburgh.me/animate-elements-scrolled-view-vanilla-js


var animateHTML = function animateHTML() {
  var elems;
  var windowHeight;

  var init = function init() {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  };

  var addEventHandlers = function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  };

  var checkPosition = function checkPosition() {
    for (var _i = 0; _i < elems.length; _i++) {
      var positionFromTop = elems[_i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        elems[_i].className = elems[_i].className.replace('hidden', 'fade-in-element');
      }
    }
  };

  return {
    init: init
  };
};

animateHTML().init(); // function that increases/decreases opacity of a background color on scroll

var fadeDivs = function fadeDivs() {
  var blackout = document.querySelector('#blackout');
  var whiteout = document.querySelector('#whiteout');
  var scrolled = window.pageYOffset;
  blackout.style.backgroundColor = 'rgba(0, 0, 0, ' + (0 + scrolled / 800);
  whiteout.style.backgroundColor = 'rgba(255, 255, 255, ' + (document.body.offsetHeight - (window.innerHeight + window.pageYOffset)) / 500;
}; // function for showing hidden elements on scroll


var scrollAppear = function scrollAppear() {
  for (var _i2 = 0; _i2 < faded.length; _i2++) {
    var introPos = faded[_i2].getBoundingClientRect().top;

    var screenPos = window.innerHeight / 1.18;

    if (introPos < screenPos) {
      faded[_i2].classList.add('fade-in');
    }
  }
}; // parallax effect


var parallax = function parallax() {
  var wScroll = window.pageYOffset;
  Array.from(document.getElementsByClassName('parallax'))[0].style.backgroundPosition = 'center ' + wScroll * -0.2 + 'px';
};

var windowEvents = function windowEvents() {
  scrollAppear();
  fadeDivs();
  parallax();
};

window.addEventListener('scroll', windowEvents); // ajax function

$('form').submit(function (event) {
  event.preventDefault();
  $.ajax({
    type: 'POST',
    url: 'process.php',
    data: $('form').serialize(),
    success: function success() {
      document.querySelector('.confirmation').setAttribute("id", "showConfirmation");
    }
  });
}); // })();