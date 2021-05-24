'use strict';

// navbar 투명, 스크롤 시 background-color 변경
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  /* 콘솔
  console.log(window.scrollY);
  console.log(`navbarHeight: ${navbarHeight}`);
  */
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// navbar의 메뉴 클릭 시 해당 section으로 scroll 되도록
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event) => {

  const target = event.target;
  const link = target.dataset.link;
  if (link == null) { // 원하는 data가 아닐 경우, 함수 리턴(더이상 밑에 있는 코드가 실행되지 않도록)
    return;
  }
  console.log(event.target.dataset.link);

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: "smooth"});
});