import {closePopup, openPopup, cleanInput} from './utils.js';

const cards = [
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
const popupNewPlace = document.querySelector('.popup_new-place');
const inputPlacename = popupNewPlace.querySelector('.popup__input_type_placename');
const inputPlacelink = popupNewPlace.querySelector('.popup__input_type_placelink');
const gallery = document.querySelector('.gallery');
const templateCard = document.querySelector('#template-card').content;



const popupOpenImage = document.querySelector('.popup__open-image');
const imageFromPopup = popupOpenImage.querySelector('.popup__image');
const imageTitleFromPopup = popupOpenImage.querySelector('.popup__image-title');

function createCard(item){

  const card = templateCard.querySelector('.gallery__item').cloneNode(true);
  const cardImage = card.querySelector('.gallery__image');
  const cardTitle = card.querySelector('.gallery__title');
  cardImage.src= item.link;
  cardImage.alt= item.name;
  cardTitle.textContent = item.name;
  addEventLike(card);
  deleteCard(card);
  handleImage(card);

  return card;
}

function initCards(){
  gallery.innerHTML = '';
  cards.forEach((item) => {
    gallery.append(createCard(item));
  });
}

function addCardFormSubmit(evt){
  evt.preventDefault();
  
  const card = createCard({
    name: inputPlacename.value,
    link: inputPlacelink.value
  })

  gallery.prepend(card);
  closePopup(popupNewPlace);
  cleanInput(popupNewPlace);
}

function addEventLike(card){
  const likeButton = card.querySelector('.gallery__like-button');
  likeButton.addEventListener('click', () => likeButton.classList.toggle('gallery__like-button_active'));
}

function deleteCard(card){
  const deleteButton = card.querySelector('.gallery__delete-button');
  deleteButton.addEventListener('click', () => card.remove());
}

function handleImage(card){
  const image = card.querySelector('.gallery__image');
  const titleImage = card.querySelector('.gallery__title');

  image.addEventListener('click', () => {
    openPopup(popupOpenImage);
    imageFromPopup.src = image.src;
    imageFromPopup.alt = titleImage.textContent;
    imageTitleFromPopup.textContent = titleImage.textContent;
  })
}

export {initCards, addCardFormSubmit}