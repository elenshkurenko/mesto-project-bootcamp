import './pages/index.css';

import {enableValidation} from './components/validate.js'
import {hasEventEditButton, handleFormSubmit} from './components/modal.js'
import {closePopup,openPopup, cleanInput} from './components/utils.js';
import {initCards, addCardFormSubmit} from './components/card.js';
import {getUserInfo} from './components/api.js';
import {updateUserInfo} from './components/profile.js'

const profile = document.querySelector('.profile');
const popupProfile = document.querySelector('.popup_profile');
const buttonEdit = profile.querySelector('.profile__edit');
const buttonAdd = profile.querySelector('.profile__button');
const closeButtons = document.querySelectorAll('.popup__close');
const profileForm = popupProfile.querySelector('.popup__form');
const popupNewPlace = document.querySelector('.popup_new-place');
const newPlaceForm = popupNewPlace.querySelector('.popup__form');
const formList = Array.from(document.querySelectorAll('.popup__form'));

enableValidation(formList);

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

getUserInfo()
.then(data => updateUserInfo(data));