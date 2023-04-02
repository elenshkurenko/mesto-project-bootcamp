const buttonEdit = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const inputUsername = popup.querySelector('.popup__input_type_username');
const inputAboutUser = popup.querySelector('.popup__input_type_about-user');
const username = document.querySelector('.profile__username');
const aboutUser = document.querySelector('.profile__about-user');
const buttonClose = popup.querySelector('.popup__close');
const buttonSave = popup.querySelector('.popup__save');

buttonEdit.addEventListener('click', () => {
  popup.classList.add('popup_opened');
  inputUsername.value = username.textContent;
  inputAboutUser.value = aboutUser.textContent;
});

buttonClose.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
  inputUsername.value = '';
  inputAboutUser.value = '';
})

function handleFormSubmit(evt){
  evt.preventDefault();
  popup.classList.remove('popup_opened');
  username.textContent = inputUsername.value;
  aboutUser.textContent = inputAboutUser.value;

}

buttonSave.addEventListener('click', handleFormSubmit);
