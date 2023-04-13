import {closePopup, openPopup} from './utils.js';

const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_profile');
const inputUsername = popupProfile.querySelector('.popup__input_type_username');
const inputAboutUser = popupProfile.querySelector('.popup__input_type_about-user');
const profile = document.querySelector('.profile');
const username = profile.querySelector('.profile__username');
const aboutUser = profile.querySelector('.profile__about-user');

function openProfilePopup(){
  openPopup(popupProfile);
}

function initForm(){
  inputUsername.value = username.textContent;
  inputAboutUser.value = aboutUser.textContent;
}

function handleProfileFormSubmit(evt){
  evt.preventDefault();
  username.textContent = inputUsername.value;
  aboutUser.textContent = inputAboutUser.value;
  closePopup(popupProfile);
}

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if(!evt.target.closest('.popup__wrap')){
      closePopup(popup);
    }
  })
})

export {openProfilePopup, handleProfileFormSubmit, initForm}