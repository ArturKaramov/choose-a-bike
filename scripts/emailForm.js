//const footer = document.querySelector('.footer');
const buttonSubmit = footer.querySelector('.footer__button');
const formEmail = footer.querySelector('.footer__input-email');

function submitEmailForm(evt) {
  evt.preventDefault();
  formEmail.value = 'Круто!';
};

buttonSubmit.addEventListener('click', submitEmailForm);
