import {closePopup,cleanInput, openPopup} from './utils.js';
import {toggleButtonState} from './validate.js'

const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_profile');
const inputUsername = popupProfile.querySelector('.popup__input_type_username');
const inputAboutUser = popupProfile.querySelector('.popup__input_type_about-user');
const profile = document.querySelector('.profile');
const username = profile.querySelector('.profile__username');
const aboutUser = profile.querySelector('.profile__about-user');

function hasEventEditButton(){
  openPopup(popupProfile);
  inputUsername.value = username.textContent;
  inputAboutUser.value = aboutUser.textContent;
  toggleButtonState(popupProfile);
}

function handleFormSubmit(evt){
  evt.preventDefault();
  username.textContent = inputUsername.value;
  aboutUser.textContent = inputAboutUser.value;
  closePopup(popupProfile);
}

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if(!evt.target.closest('.popup__wrap')){
      closePopup(popup);
      cleanInput(popup);
    }
  })
})

export {hasEventEditButton, handleFormSubmit}