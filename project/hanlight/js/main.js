// Header
const header = document.querySelector('.header');
const menuButton = document.querySelector('.header__menu-button');
const navLinks = document.querySelectorAll('.header__nav a');

menuButton.addEventListener('click', function () {
  header.classList.toggle('is-open');

  const isOpen = header.classList.contains('is-open');
  menuButton.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
});

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    header.classList.remove('is-open');
    menuButton.setAttribute('aria-label', '메뉴 열기');
  });
});


// Works
const works = document.querySelector('.works');

if (works) {
  const tabs = works.querySelectorAll('.works__tab');
  const items = Array.from(works.querySelectorAll('.works__item'));
  const moreButton = works.querySelector('.works__more');
  const modal = works.querySelector('.works-modal');
  const modalImage = works.querySelector('.works-modal__figure img');
  const modalTitle = works.querySelector('.works-modal__figure strong');
  const modalDesc = works.querySelector('.works-modal__figure span');
  const modalClose = works.querySelector('.works-modal__close');
  const modalDim = works.querySelector('.works-modal__dim');
  const modalPrev = works.querySelector('.works-modal__arrow--prev');
  const modalNext = works.querySelector('.works-modal__arrow--next');

  let currentFilter = 'all';
  let visibleItems = [];
  let modalItems = [];
  let currentIndex = 0;
  let showCount = window.innerWidth <= 768 ? 6 : 8;
  let lastFocusedElement = null;

  const getShowStep = () => {
    return window.innerWidth <= 768 ? 6 : 8;
  };

  const getColumnCount = () => {
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4;
  };

  const adjustShowCount = () => {
    const columnCount = getColumnCount();
    const remainingCount = visibleItems.length - showCount;

    if (remainingCount > 0 && remainingCount < columnCount) {
      showCount = visibleItems.length;
    }
  };

  const updateMoreButton = () => {
    const hasMore = visibleItems.length > getShowStep();
    const isLastPage = showCount >= visibleItems.length;

    moreButton.classList.toggle('is-hidden', !hasMore);
    moreButton.textContent = isLastPage ? '닫기' : '더 보기';
    moreButton.setAttribute('aria-expanded', String(isLastPage));
  };

  const updateItems = () => {
    visibleItems = items.filter((item) => {
      return currentFilter === 'all' || item.dataset.category === currentFilter;
    });

    if (showCount > visibleItems.length) {
      showCount = visibleItems.length;
    }

    adjustShowCount();

    items.forEach((item) => {
      const isMatched = currentFilter === 'all' || item.dataset.category === currentFilter;

      item.classList.toggle('is-hidden', !isMatched);
      item.classList.remove('is-more-hidden');
    });

    visibleItems.forEach((item, index) => {
      item.classList.toggle('is-more-hidden', index >= showCount);
    });

    updateMoreButton();
  };

  const resetItems = () => {
    showCount = getShowStep();
    updateItems();
  };

  const toggleMoreItems = () => {
    const isLastPage = showCount >= visibleItems.length;

    if (isLastPage) {
      showCount = getShowStep();

      works.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      showCount += getShowStep();
    }

    updateItems();
  };

  const updateTabCounts = () => {
  tabs.forEach((tab) => {
    const filter = tab.dataset.filter;
    const countElement = tab.querySelector('.works__tab-count');

    if (!countElement) return;

    const count = filter === 'all'
      ? items.length
      : items.filter((item) => item.dataset.category === filter).length;

    countElement.textContent = count;
  });
};

  const updateTabs = (activeTab) => {
    tabs.forEach((tab) => {
      const isActive = tab === activeTab;

      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-pressed', String(isActive));
    });
  };

  const getFocusableElements = () => {
    return Array.from(modal.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((element) => {
      return !element.disabled;
    });
  };

  const renderModal = () => {
    const item = modalItems[currentIndex];
    const card = item.querySelector('.works__card');
    const image = card.querySelector('img');

    modalImage.src = card.dataset.image;
    modalImage.alt = image.alt;
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;

    const isSingle = modalItems.length <= 1;
    modalPrev.disabled = isSingle;
    modalNext.disabled = isSingle;
  };

  const openModal = (item) => {
    modalItems = visibleItems.filter((visibleItem) => {
      return !visibleItem.classList.contains('is-more-hidden');
    });

    currentIndex = modalItems.indexOf(item);

    if (currentIndex < 0) return;

    lastFocusedElement = document.activeElement;

    renderModal();
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  };

  const closeModal = () => {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  const moveModal = (direction) => {
    if (modalItems.length <= 1) return;

    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = modalItems.length - 1;
    }

    if (currentIndex >= modalItems.length) {
      currentIndex = 0;
    }

    renderModal();
  };

  tabs.forEach((tab) => {
    tab.setAttribute('aria-pressed', tab.classList.contains('is-active') ? 'true' : 'false');

    tab.addEventListener('click', () => {
      updateTabs(tab);
      currentFilter = tab.dataset.filter;
      resetItems();
    });
  });

  items.forEach((item) => {
    const card = item.querySelector('.works__card');

    card.addEventListener('click', () => {
      openModal(item);
    });
  });

  moreButton.setAttribute('aria-expanded', 'false');
  moreButton.addEventListener('click', toggleMoreItems);

  modalClose.addEventListener('click', closeModal);
  modalDim.addEventListener('click', closeModal);

  modalPrev.addEventListener('click', () => {
    moveModal(-1);
  });

  modalNext.addEventListener('click', () => {
    moveModal(1);
  });

  window.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('is-active')) return;

    if (event.key === 'Escape') {
      closeModal();
    }

    if (event.key === 'ArrowLeft') {
      moveModal(-1);
    }

    if (event.key === 'ArrowRight') {
      moveModal(1);
    }

    if (event.key === 'Tab') {
      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  });

  let windowWidth = window.innerWidth;

  window.addEventListener('resize', () => {
    if (window.innerWidth === windowWidth) return;

    windowWidth = window.innerWidth;
    resetItems();
  });
  updateTabCounts();
  updateItems();
}


/* Scroll Reveal */
const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -80px 0px'
});

revealItems.forEach((item) => {
  revealObserver.observe(item);
});