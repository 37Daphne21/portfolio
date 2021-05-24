'use strict';

// navbar 투명, 스크롤 시 background-color 변경
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  /*
  console.log(window.scrollY);
  console.log(`navbarHeight: ${navbarHeight}`);
  */
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});