// Toggle Navbar on Menu Icon click
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
