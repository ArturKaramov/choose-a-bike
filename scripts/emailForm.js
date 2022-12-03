const buttonSubmit = footer.querySelector('.footer__button');
const formEmail = footer.querySelector('.footer__input-email');
const strSubmit = 'Круто!';

function submitEmailForm(evt) {
  evt.preventDefault();
  if (formEmail.value.includes("@") && formEmail.value.includes(".")) {formEmail.value = strSubmit;};
};

buttonSubmit.addEventListener('click', submitEmailForm);
