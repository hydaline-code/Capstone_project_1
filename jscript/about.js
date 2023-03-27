const Menu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hambuger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  Menu.classList.toggle('active');
});
