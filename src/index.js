import './pages/index.css';

import {enableValidation} from './components/validate.js'
import {hasEventEditButton, handleFormSubmit, initForm} from './components/modal.js'
import {closePopup,openPopup, cleanInput} from './components/utils.js';
import {initCards, addCardFormSubmit} from './components/card.js'

const profile = document.querySelector('.profile');
const popupProfile = document.querySelector('.popup_profile');
const buttonEdit = profile.querySelector('.profile__edit');
const buttonAdd = profile.querySelector('.profile__button');
const closeButtons = document.querySelectorAll('.popup__close');
const profileForm = popupProfile.querySelector('.popup__form');
const popupNewPlace = document.querySelector('.popup_new-place');
const newPlaceForm = popupNewPlace.querySelector('.popup__form');

initForm();

buttonEdit.addEventListener('click', hasEventEditButton);
buttonAdd.addEventListener('click', () => {openPopup(popupNewPlace)});

closeButtons.forEach((item) => {
  const popup = item.closest('.popup');
  item.addEventListener('click', () => {
    closePopup(popup);
    cleanInput(popup);
  });
  
})
profileForm.addEventListener('submit', handleFormSubmit);

initCards();
newPlaceForm.addEventListener('submit', addCardFormSubmit);

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});