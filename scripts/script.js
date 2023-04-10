const profile = document.querySelector('.profile');
const buttonEdit = profile.querySelector('.profile__edit');
const buttonAdd = profile.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_profile');
const popupNewPlace = document.querySelector('.popup_new-place');
const inputUsername = popupProfile.querySelector('.popup__input_type_username');
const inputAboutUser = popupProfile.querySelector('.popup__input_type_about-user');
const inputPlacename = popupNewPlace.querySelector('.popup__input_type_placename');
const inputPlacelink = popupNewPlace.querySelector('.popup__input_type_placelink');
const username = profile.querySelector('.profile__username');
const aboutUser = profile.querySelector('.profile__about-user');
const profileButtonClose = popupProfile.querySelector('.popup__close');
const newPlaceButtonClose = popupNewPlace.querySelector('.popup__close');
const profileForm = popupProfile.querySelector('.popup__form');
const newPlaceForm = popupNewPlace.querySelector('.popup__form');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 
const gallery = document.querySelector('.gallery');
const templateCard = document.querySelector('#template-card').content;
const popupOpenImage = document.querySelector('.popup__open-image');
const imageFromPopup = popupOpenImage.querySelector('.popup__image');
const imageTitleFromPopup = popupOpenImage.querySelector('.popup__image-title');
const closeButtons = document.querySelectorAll('.popup__close'); 

function closePopup(popup){
  popup.classList.remove('popup_opened');
}
function openPopup(popup){
  popup.classList.add('popup_opened');
}
function cleanInput(popup){
  popup.querySelector('.popup__form').reset();
}

buttonEdit.addEventListener('click', () => {
  openPopup(popupProfile);
  inputUsername.value = username.textContent;
  inputAboutUser.value = aboutUser.textContent;
});

closeButtons.forEach((item) => {
  const popup = item.closest('.popup');
  item.addEventListener('click', () => closePopup(popup));
   
  })


profileButtonClose.addEventListener('click', () => {
  cleanInput(popupProfile);
});

function handleFormSubmit(evt){
  evt.preventDefault();
  username.textContent = inputUsername.value;
  aboutUser.textContent = inputAboutUser.value;
  closePopup(popupProfile);
};

profileForm.addEventListener('submit', handleFormSubmit);

initialCards.forEach((item) => {
  const card = templateCard.querySelector('.gallery__item').cloneNode(true);
  const cardImage = card.querySelector('.gallery__image');
  const cardTitle = card.querySelector('.gallery__title');
  cardImage.src= item.link;
  cardImage.alt= item.name;
  cardTitle.textContent = item.name;
  addEventLike(card);
  deleteCard(card);
  handleImage(card);

  gallery.append(card);
});

buttonAdd.addEventListener('click', () => {
  openPopup(popupNewPlace);
});

function addCardFormSubmit(evt){
  evt.preventDefault();
  const card = templateCard.querySelector('.gallery__item').cloneNode(true);
  closePopup(popupNewPlace);
  card.querySelector('.gallery__title').textContent = inputPlacename.value;
  card.querySelector('.gallery__image').src = inputPlacelink.value;
  addEventLike(card);
  deleteCard(card);
  handleImage(card);
  gallery.prepend(card);
  cleanInput(popupNewPlace);
};

newPlaceForm.addEventListener('submit', addCardFormSubmit);

function addEventLike(card){
  const likeButton = card.querySelector('.gallery__like-button');
  likeButton.addEventListener('click', () => likeButton.classList.toggle('gallery__like-button_active'));
};

function deleteCard(card){
  const deleteButton = card.querySelector('.gallery__delete-button');
  deleteButton.addEventListener('click', () => card.remove());
};

function handleImage(card){
  const image = card.querySelector('.gallery__image');
  const titleImage = card.querySelector('.gallery__title');

  image.addEventListener('click', () => {
    openPopup(popupOpenImage);
    imageFromPopup.src = image.src;
    imageFromPopup.alt = titleImage.textContent;
    imageTitleFromPopup.textContent = titleImage.textContent;
  })
};

