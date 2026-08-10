const header = document.querySelector('.header');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('.main-nav-list');
const yearEl = document.querySelector('.year');

openMenu.addEventListener('click', function () {
  header.classList.add('nav-open');
  nav.addEventListener('click', function () {
    header.classList.remove('nav-open');
  });
});

closeMenu.addEventListener('click', function () {
  header.classList.remove('nav-open');
});

const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const heroEl = document.querySelector('.section-hero');
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add('sticky');
    if (ent.isIntersecting) document.body.classList.remove('sticky');
  },
  { root: null, threshold: 0, rootMargin: '-90px' },
);

observer.observe(heroEl);
