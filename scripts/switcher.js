const switchers = document.querySelectorAll('.switcher__button');
const page = document.querySelector('.page');
const subtitleList = document.querySelectorAll('.section__subtitle');
const footer = document.querySelector('.footer');
const header = document.querySelector('.header');
const footerCopyright = document.querySelector('.footer__copyright');
const footerLogo = document.querySelector('.footer__logo');
const moonHeader = header.querySelector('[data-js="moon"]');
const sunHeader = header.querySelector('[data-js="sun"]');
const moonFooter = footer.querySelector('[data-js="moon"]');
const sunFooter = footer.querySelector('[data-js="sun"]');
let moonLogo = "./images/moon-dark.svg";
let sunLogo = "./images/sun-dark.svg";
let logo = "./images/logo-dark.svg";
let select = "./images/select-dark.svg";

const clickSwitcher = () => {
  switchers.forEach((switcher) => {
    switcher.classList.toggle('switcher__button_mode_light');
    switcher.classList.toggle('switcher__button_mode_dark');
  })
  switchMode()
};

function switchMode() {
  page.classList.toggle('page_mode_dark');
  footer.classList.toggle('footer_mode_dark');
  arrowLeft.classList.toggle('button_mode_dark');
  arrowRight.classList.toggle('button_mode_dark');
  formEmail.classList.toggle('footer__input-email_mode_dark')
  buttonSubmit.classList.toggle('footer__button_mode_dark');
  footerCopyright.classList.toggle('footer__copyright_mode_dark');
  document.querySelector(".eddy-merckx__about").classList.toggle('eddy-merckx__about_mode_dark');
  subtitleList.forEach((n) => (n.classList.toggle('section__subtitle_mode_dark')));
  options.classList.toggle('bikes__options_mode_dark');
  bikesList.forEach((n) => (n.classList.toggle('bikes__option_mode_dark')));
  menuButton.classList.toggle('header__menu_mode_dark');
  menuCloseButton.classList.toggle('header__menu_close_mode_dark');
  selectButton.classList.toggle('bikes__select-image_mode_dark');
  [footerLogo.src, logo] = [logo, footerLogo.src];
  [sunHeader.src, sunFooter.src, sunLogo] = [sunLogo, sunLogo, sunHeader.src];
  [moonHeader.src, moonFooter.src, moonLogo] = [moonLogo, moonLogo, moonHeader.src];
};

switchers.forEach(function(switcher) {
  switcher.addEventListener('click', clickSwitcher)
})
