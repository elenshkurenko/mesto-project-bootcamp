import {openPopup} from './utils.js';

const popupProfile = document.querySelector('.popup_profile');
const inputUsername = popupProfile.querySelector('.popup__input_type_username');
const inputAboutUser = popupProfile.querySelector('.popup__input_type_about-user');

function openProfilePopup(){
  openPopup(popupProfile);
}

function fillProfileInputs(data){
  inputUsername.value = data.name;
  inputAboutUser.value = data.about;
}

export {openProfilePopup, fillProfileInputs}