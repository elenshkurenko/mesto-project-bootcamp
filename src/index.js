import './pages/index.css';

import {enableValidation} from './components/validate.js'
import {openProfilePopup, fillProfileInputs} from './components/modal.js'
import {closePopup, openPopup} from './components/utils.js';
import {initCards, addCardFormSubmit} from './components/card.js'
import {getUserInfo} from './components/api.js';
import {updateUserInfo, updateAvatar, handleProfileFormSubmit} from './components/profile.js';

let userId;

const popups = document.querySelectorAll('.popup');
const profile = document.querySelector('.profile');
const popupProfile = document.querySelector('.popup_profile');
const buttonEdit = profile.querySelector('.profile__edit');
const username = profile.querySelector('.profile__username');
const aboutUser = profile.querySelector('.profile__about-user');
const buttonAdd = profile.querySelector('.profile__button');
const avatar = profile.querySelector('.profile__edit-avatar');
const closeButtons = document.querySelectorAll('.popup__close');
const profileForm = popupProfile.querySelector('.popup__form');
const popupNewPlace = document.querySelector('.popup_new-place');
const popupUpdateAvatar = document.querySelector('.popup_update-avatar');
const newPlaceForm = popupNewPlace.querySelector('.popup__form');
const avatarForm = popupUpdateAvatar.querySelector('.popup__form');

fillProfileInputs({
  name: username.textContent,
  about: aboutUser.textContent
})

buttonEdit.addEventListener('click', openProfilePopup);
buttonAdd.addEventListener('click', () => {openPopup(popupNewPlace)});
avatar.addEventListener('click', () => openPopup(popupUpdateAvatar));

closeButtons.forEach((item) => {
  const popup = item.closest('.popup');
  item.addEventListener('click', () => {
    closePopup(popup);
  });
})

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if(!evt.target.closest('.popup__wrap')){
      closePopup(popup);
    }
  })
})

avatarForm.addEventListener('submit', updateAvatar);
profileForm.addEventListener('submit', handleProfileFormSubmit);
newPlaceForm.addEventListener('submit', addCardFormSubmit);


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

getUserInfo()
.then(data => {
  userId = data._id;
  updateUserInfo(data);
  fillProfileInputs(data);
  initCards();
})
.catch((err) => {
  console.log(err);
}) 

export {userId}
