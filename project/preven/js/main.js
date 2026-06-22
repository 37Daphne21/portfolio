const header = document.querySelector('.header');
const menuButton = document.querySelector('.header__menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu__link');
const navLinks = document.querySelectorAll('.header__link, .mobile-menu__link');
const sections = document.querySelectorAll('section[id]');

menuButton.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');

  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '메뉴 열기');
  });
});

const updateMenuPosition = () => {
  mobileMenu.style.top = `${header.offsetHeight}px`;
};

const revealItems = document.querySelectorAll(
  '.target-card, .support__item, .strength-card, .compare-banner'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('is-visible');
    revealObserver.unobserve(entry.target);
  });
}, {
  threshold: 0.18
});

revealItems.forEach((item) => {
  item.classList.add('reveal');
  revealObserver.observe(item);
});

const processItems = document.querySelectorAll('.process__item');

const processObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    processItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('is-visible');
      }, index * 220);
    });

    processObserver.unobserve(entry.target);
  });
}, {
  threshold: 0.2
});

processItems.forEach((item) => {
  item.classList.add('reveal');
});

if (processItems.length) {
  processObserver.observe(processItems[0]);
}

const setActiveLink = () => {
  let currentId = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;

    if (window.scrollY >= sectionTop) {
      currentId = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${currentId}`);
  });
};

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

updateMenuPosition();

window.addEventListener('resize', () => {
  updateMenuPosition();

  if (window.innerWidth > 720) {
    mobileMenu.classList.remove('is-open');

    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '메뉴 열기');
  }
});

window.addEventListener('orientationchange', updateMenuPosition);