import { cleanInput, startSend, endSend } from './utils.js';
import { closePopup, openPopup } from './modal.js';
import { addNewCard, removeCard, addLike, removeLike } from './api.js';
import { userId } from '../index.js';

const popupNewPlace = document.querySelector('.popup_new-place');
const inputPlacename = popupNewPlace.querySelector('.popup__input_type_placename');
const inputPlacelink = popupNewPlace.querySelector('.popup__input_type_placelink');
const submitButtonNewPlace = popupNewPlace.querySelector('.popup__save');
const gallery = document.querySelector('.gallery');
const templateCard = document.querySelector('#template-card').content;

const popupOpenImage = document.querySelector('.popup__open-image');
const imageFromPopup = popupOpenImage.querySelector('.popup__image');
const imageTitleFromPopup = popupOpenImage.querySelector('.popup__image-title');

function createCard(item) {
  const card = templateCard.querySelector('.gallery__item').cloneNode(true);
  const cardImage = card.querySelector('.gallery__image');
  const cardTitle = card.querySelector('.gallery__title');
  const iconDeleteCard = card.querySelector('.gallery__delete-button');
  const canDeleteCard = checkDeleteCard(item.owner._id);

  addEventLike(card, item._id);

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;

  if (checkIlike(item.likes)) {
    card.querySelector('.gallery__like-button').classList.add('gallery__like-button_active');
  }


  setCardLikes(card, item);

  deleteCard(card, item._id);
  handleImage(card);

  if (!canDeleteCard) {
    iconDeleteCard.remove();
  }

  return card;
}

function setCardLikes(card, item) {
  const cardLikes = card.querySelector('.gallery__likes');
  cardLikes.textContent = item.likes.length;
}

function checkDeleteCard(id) {
  return id === userId;
}

function checkIlike(likes) {
  return likes.some(el => {
    return el._id === userId;
  })
}

function initCards(cards) {
  gallery.innerHTML = '';
  cards.forEach((item) => {
    gallery.append(createCard(item));
  })
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  startSend(submitButtonNewPlace);

  addNewCard(inputPlacename.value, inputPlacelink.value)
    .then(data => {
      const card = createCard(data)
      gallery.prepend(card);

      cleanInput(popupNewPlace);
      closePopup(popupNewPlace);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => endSend(submitButtonNewPlace))
}

function addEventLike(card, id) {
  const likeButton = card.querySelector('.gallery__like-button');
  likeButton.addEventListener('click', () => {
    if (likeButton.classList.contains('gallery__like-button_active')) {
      removeLike(id)
        .then(data => {
          setCardLikes(card, data);
          likeButton.classList.remove('gallery__like-button_active');
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      addLike(id)
        .then(data => {
          setCardLikes(card, data);
          likeButton.classList.add('gallery__like-button_active');
        })
        .catch((err) => {
          console.log(err);
        })
    }
  });
}

function deleteCard(card, id) {
  const deleteButton = card.querySelector('.gallery__delete-button');
  deleteButton.addEventListener('click', () => {
    removeCard(id)
      .then(() => {
        card.remove()
      })
      .catch((err) => {
        console.log(err);
      })
  });
}

function handleImage(card) {
  const image = card.querySelector('.gallery__image');
  const titleImage = card.querySelector('.gallery__title');

  image.addEventListener('click', () => {
    openPopup(popupOpenImage);
    imageFromPopup.src = image.src;
    imageFromPopup.alt = titleImage.textContent;
    imageTitleFromPopup.textContent = titleImage.textContent;
  })
}

export { initCards, handleCardFormSubmit }