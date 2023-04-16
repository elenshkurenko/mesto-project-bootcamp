import './pages/index.css';

import {enableValidation} from './components/validate.js'
import {closePopup, openPopup} from './components/modal.js';
import {initCards, handleCardFormSubmit} from './components/card.js'
import {getUserInfo, loadCards} from './components/api.js';
import {updateUserInfo, updateAvatar, handleProfileFormSubmit, openProfilePopup} from './components/profile.js';

let userId;

const popups = document.querySelectorAll('.popup');
const profile = document.querySelector('.profile');
const popupProfile = document.querySelector('.popup_profile');
const buttonEdit = profile.querySelector('.profile__edit');
const buttonAdd = profile.querySelector('.profile__button');
const avatar = profile.querySelector('.profile__edit-avatar');
const closeButtons = document.querySelectorAll('.popup__close');
const profileForm = popupProfile.querySelector('.popup__form');
const popupNewPlace = document.querySelector('.popup_new-place');
const popupUpdateAvatar = document.querySelector('.popup_update-avatar');
const newPlaceForm = popupNewPlace.querySelector('.popup__form');
const avatarForm = popupUpdateAvatar.querySelector('.popup__form');

buttonEdit.addEventListener('click', openProfilePopup);
buttonAdd.addEventListener('click', () => openPopup(popupNewPlace));
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
newPlaceForm.addEventListener('submit', handleCardFormSubmit);


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});


Promise.all([getUserInfo(), loadCards()])
  .then(([userData, cards]) => {
      userId = userData._id;
      updateUserInfo(userData);

      initCards(cards);
  })
  .catch(err => {
    console.log(err);
  });

export {userId}
