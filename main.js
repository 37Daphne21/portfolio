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
  // console.log(link);
  scrollToSection(link);
  // 메뉴 클릭으로 인해 섹션으로 스크롤 이동하고 나면 navbar 메뉴 다시 안보이도록 설정
  navbarMenu.classList.remove('open');
});

// small screen 에서 Navbar의 .toggle-btn 누르면 메뉴 보이도록
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
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


// Projects : 카테고리 버튼 클릭 시 필터링
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter; // || : span 안에 든 숫자 클릭시에도 적용될 수 있도록 지정
  if (filter == null) {
    return;
  }
  // console.log(filter);

  projectContainer.classList.add('ani-out'); // opacity 0처리 애니효과
  setTimeout(() => {  // 3초 뒤 나올 컨텐츠 셋팅
    projects.forEach((project) => {
      // console.log(project.dataset.type);
      if (filter === '*' || filter === project.dataset.type) { // filter값과 type이 동일한 data만 추출
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('ani-out'); // opacity 1 처리
  },300);

  // 활성화된 버튼에 selected 클래스 부여
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    /* span.category__count 때문에 생성
    -> 클릭된 것이 button이면 그대로 target 진행, button이 아닐 경우 부모요소로 진행 */
  target.classList.add('selected');
});


/////////////////////// 사용자지정함수 ///////////////////////
// 클릭 시 해당 섹션으로 스크롤 이동되는 함수 지정
function scrollToSection(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
