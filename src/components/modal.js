import {openPopup, enableButton} from './utils.js';

const profile = document.querySelector('.profile');
const popupProfile = document.querySelector('.popup_profile');
const inputUsername = popupProfile.querySelector('.popup__input_type_username');
const inputAboutUser = popupProfile.querySelector('.popup__input_type_about-user');
const submitButtonProfile = popupProfile.querySelector('.popup__save');
const username = profile.querySelector('.profile__username');
const aboutUser = profile.querySelector('.profile__about-user');

function openProfilePopup(){
  fillProfileInputs({
    name: username.textContent,
    about: aboutUser.textContent
  });
  openPopup(popupProfile);

}

function fillProfileInputs(data){
  inputUsername.value = data.name;
  inputAboutUser.value = data.about;
  enableButton(submitButtonProfile);
}

export {openProfilePopup, fillProfileInputs}