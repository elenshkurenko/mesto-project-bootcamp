import {closePopup, openPopup, startSend, endSend} from './utils.js';
import{editProfile} from './api.js';

const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_profile');
const inputUsername = popupProfile.querySelector('.popup__input_type_username');
const inputAboutUser = popupProfile.querySelector('.popup__input_type_about-user');
const profile = document.querySelector('.profile');
const username = profile.querySelector('.profile__username');
const aboutUser = profile.querySelector('.profile__about-user');
const submitButtonProfile = popupProfile.querySelector('.popup__save');

function openProfilePopup(){
  openPopup(popupProfile);
}

function initForm(data){
  inputUsername.value = data.name;
  inputAboutUser.value = data.about;
}

function handleProfileFormSubmit(evt){
  evt.preventDefault();

  startSend(submitButtonProfile);

  username.textContent = inputUsername.value;
  aboutUser.textContent = inputAboutUser.value;
  editProfile(inputUsername.value, inputAboutUser.value);

  endSend(popupProfile, submitButtonProfile);

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