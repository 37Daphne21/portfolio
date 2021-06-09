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
  navbarMenu.classList.remove('open');
  scrollToSection(link);
  selectNavItem(target);
  // 메뉴 클릭으로 인해 섹션으로 스크롤 이동하고 나면 navbar 메뉴 다시 안보이도록 설정
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


// Skills 섹션 progress bar 애니메이션 효과
const skills = document.querySelectorAll(".skill__value");
const skillOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};
const skillCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("move");
    } else {
      entry.target.classList.remove("move");
    }
  });
};
const skillObserver = new IntersectionObserver(skillCallback, skillOption);
skills.forEach((skill) => skillObserver.observe(skill));


// Portfolio 섹션 > Projects : 카테고리 버튼 클릭 시 필터링
const portfolioBtnContainer = document.querySelector('.portfolio__categories');
const projectContainer = document.querySelector('.portfolio__projects');
const projects = document.querySelectorAll('.project');
portfolioBtnContainer.addEventListener('click', (e) => {
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


/////////////////////// 섹션 진입 시 메뉴 active ///////////////////////
// 1. 모든 섹션 요소들과 메뉴아이템들을 가지고 온다
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다. (모든 섹션들의 진입과 나가는 것을 관찰해야함)
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#portfolio',
  '#personality',
  '#contact',
];
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id =>
  document.querySelector(`[data-link="${id}"]`)
);

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];
function selectNavItem(selected) {
  selectedNavItem.classList.remove('active');
  selectedNavItem = selected;
  selectedNavItem.classList.add('active');
}


/////////////////////// 사용자지정함수 ///////////////////////
// 클릭 시 해당 섹션으로 스크롤 이동되는 함수 지정
function scrollToSection(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
  selectNavItem(navItems[sectionIds.indexOf(selector)]); // contact us, arrow-up 버튼 클릭 시에도 스크롤 이동 가능하도록
}
/////////////////////////////////////////////////////////////

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    // 콜백 안에서 해당하는 섹션을 찾아서 navbar 메뉴를 활성화 해주는 일
    if (!entry.isIntersecting && entry.intersectionRatio > 0) { // 첫 화면에서 personality이 잡히지 않도록
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      // 스크롤링이 아래로 되어서 페이지가 올라옴
      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

window.addEventListener('wheel', () => { // 계단식 이동 방지를 위해 scroll 대신 wheel 사용
  if (window.scrollY === 0) { // 스크롤 top 0 일 경우
    selectedNavIndex = 0;
  } else if ( // 스크롤 제일 밑으로 도달 시
    // window.scrollY + window.innerHeight === document.body.clientHeight
    Math.ceil(window.scrollY + window.innerHeight) >= document.body.clientHeight) {
      /* 스크롤 해서 페이지 제일 아래로 내렸을경우,
      scrollY와 window창의 innerHeight 값을 더한값이
      정확하게 일치 하지 않는 경우를 대비 */
    selectedNavIndex = navItems.length - 1; // 배열의 크기 6 - 1 = 마지막 인덱스값 5로
  }
  selectNavItem(navItems[selectedNavIndex])
});