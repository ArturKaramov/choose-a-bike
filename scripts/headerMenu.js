const menuButton = document.querySelector('.header__menu');
const headerSwitcher = header.querySelector('.switcher');
const headerLinks = header.querySelector('.header__links');
const menuCloseButton = header.querySelector('.header__menu_close');

function openMenu() {
  header.classList.add('header_mobile');
  headerSwitcher.classList.remove('block_display_none');
  headerLinks.classList.add('block_display_flex');
  menuCloseButton.classList.remove('block_display_none');
  menuButton.classList.add('block_display_none');
}

function closeMenu() {
  header.classList.remove('header_mobile');
  headerSwitcher.classList.add('block_display_none');
  headerLinks.classList.remove('block_display_flex');
  menuCloseButton.classList.add('block_display_none');
  menuButton.classList.remove('block_display_none');
}

menuButton.addEventListener('click', openMenu);
menuCloseButton.addEventListener('click', closeMenu);
headerLinks.addEventListener('click', closeMenu)
