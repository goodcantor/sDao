"use strict";

var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__nav');
var body = document.querySelector('body');

burger.onclick = function () {
  burger.classList.toggle('opened');
  menu.classList.toggle('header__nav-active');
  body.classList.toggle('scroll-hidden');
};

var navbar = document.querySelector('.header');

window.onscroll = function () {
  var top = window.scrollY;

  if (top >= 2) {
    navbar.classList.add('header-background');
  } else {
    navbar.classList.remove('header-background');
  }
};
//# sourceMappingURL=main.js.map
