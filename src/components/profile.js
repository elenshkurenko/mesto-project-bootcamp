import {setNewAvatar} from './api.js';
import { closePopup } from './utils';

const profile = document.querySelector('.profile');
const username = profile.querySelector('.profile__username');
const aboutUser = profile.querySelector('.profile__about-user');
const avatar = profile.querySelector('.profile__avatar');
const popupAvatar = document.querySelector('.popup_update-avatar');
const unpadAvatarInput = popupAvatar.querySelector('.popup__input');

function updateUserInfo(data){
  username.textContent = data.name;
  aboutUser.textContent = data.about;
  avatar.src = data.avatar;
}

function updateAvatar(evt){
  evt.preventDefault();

  setNewAvatar(unpadAvatarInput.value)
  .then(data => {
    updateUserInfo(data);
    closePopup(popupAvatar);
  })
}

export {updateUserInfo, updateAvatar}