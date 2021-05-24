'use strict';

// navbar 스크롤 시 background-color 변경
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

// navbar의 메뉴 클릭 시 해당 섹션으로 스크롤 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {

  const target = event.target;
  const link = target.dataset.link;
  if (link == null) { // 원하는 data가 아닐 경우, 함수 리턴(더이상 밑에 있는 코드가 실행되지 않도록)
    return;
  }
  console.log(link);

  scrollToSection(link);
});

// Home의 Contact Me 버튼 클릭 시 #contact 섹션으로 스크롤 이동
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollToSection('#contact');
});


// 스크롤 시 home의 컨텐츠들이 점점 투명해지도록
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height; // 748
document.addEventListener('scroll', () => {
  // console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤 시 arrow-up 버튼 생성
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 5) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

//  arrow-up 버튼 클릭 시 top으로 스크롤 이동
arrowUp.addEventListener('click', () => {
  scrollToSection('#home');
});


// 클릭 시 해당 섹션으로 스크롤 이동되는 함수 지정
function scrollToSection(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
