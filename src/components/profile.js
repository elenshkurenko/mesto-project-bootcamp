import { setNewAvatar, editProfile } from './api.js';
import { closePopup, openPopup } from './modal.js';
import { enableButton } from './validate.js';
import { cleanInput, startSend, endSend } from './utils.js';
import { settings } from '../index.js';

const profile = document.querySelector('.profile');
const popupProfile = document.querySelector('.popup_profile');
const username = profile.querySelector('.profile__username');
const aboutUser = profile.querySelector('.profile__about-user');
const submitButtonProfile = popupProfile.querySelector('.popup__save');
const avatar = profile.querySelector('.profile__avatar');
const popupAvatar = document.querySelector('.popup_update-avatar');
const unpadAvatarInput = popupAvatar.querySelector('.popup__input');
const submitButtonAvatar = popupAvatar.querySelector('.popup__save');
const inputUsername = popupProfile.querySelector('.popup__input_type_username');
const inputAboutUser = popupProfile.querySelector('.popup__input_type_about-user');

function updateUserInfo(data) {
  username.textContent = data.name;
  aboutUser.textContent = data.about;
  avatar.src = data.avatar;
}

function updateAvatar(evt) {
  evt.preventDefault();

  startSend(submitButtonAvatar);

  setNewAvatar(unpadAvatarInput.value)
    .then(data => {
      cleanInput(popupAvatar);
      closePopup(popupAvatar);
      updateUserInfo(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => endSend(submitButtonAvatar))
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  startSend(submitButtonProfile);

  editProfile(inputUsername.value, inputAboutUser.value)
    .then(() => {
      username.textContent = inputUsername.value;
      aboutUser.textContent = inputAboutUser.value;
      closePopup(popupProfile);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      endSend(submitButtonProfile);
    })
}

function openProfilePopup() {
  fillProfileInputs({
    name: username.textContent,
    about: aboutUser.textContent
  });
  openPopup(popupProfile);
}

function fillProfileInputs(data) {
  inputUsername.value = data.name;
  inputAboutUser.value = data.about;
  enableButton(submitButtonProfile, settings);
}

export { updateUserInfo, updateAvatar, handleProfileFormSubmit, openProfilePopup }