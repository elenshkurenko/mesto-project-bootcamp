import {closePopup, openPopup, cleanInput} from './utils.js';
import {loadCards, addNewCard, removeCard, addLike, removeLike} from './api.js'

const popupNewPlace = document.querySelector('.popup_new-place');
const inputPlacename = popupNewPlace.querySelector('.popup__input_type_placename');
const inputPlacelink = popupNewPlace.querySelector('.popup__input_type_placelink');
const gallery = document.querySelector('.gallery');
const templateCard = document.querySelector('#template-card').content;

const popupOpenImage = document.querySelector('.popup__open-image');
const imageFromPopup = popupOpenImage.querySelector('.popup__image');
const imageTitleFromPopup = popupOpenImage.querySelector('.popup__image-title');
const myId = '12284cd080471aa186314a04';

function createCard(item){
  const card = templateCard.querySelector('.gallery__item').cloneNode(true);
  const cardImage = card.querySelector('.gallery__image');
  const cardTitle = card.querySelector('.gallery__title');
  const iconDeleteCard = card.querySelector('.gallery__delete-button');
  const canDeleteCard = checkDeleteCard(item.owner._id);

  addEventLike(card,item, item._id);

  cardImage.src= item.link;
  cardImage.alt= item.name;
  cardTitle.textContent = item.name;

  if(checkIlike(item.likes)){
    card.querySelector('.gallery__like-button').classList.add('gallery__like-button_active');
    
  }

  
  cardLikes(card, item);
  
  deleteCard(card, item._id);
  handleImage(card);

  if(!canDeleteCard){
    iconDeleteCard.remove();
  }

  return card;
}

function cardLikes(card, item) {
  const cardLikes = card.querySelector('.gallery__likes');
  cardLikes.textContent = item.likes.length;
}

function checkDeleteCard(id) {
  return id === myId;
}

function checkIlike(likes){
  return likes.some(el => {
    return el._id === myId;
  })
}

function initCards(){
  gallery.innerHTML = '';
  loadCards()
  .then(cards => {
    cards.forEach((item) => {
      gallery.append(createCard(item));
    });
  })
}

function addCardFormSubmit(evt){
  evt.preventDefault();

  addNewCard(inputPlacename.value, inputPlacelink.value)
  .then(data => {

    const card = createCard(data)
  
    gallery.prepend(card);
  })
  closePopup(popupNewPlace);
  cleanInput(popupNewPlace);

}

function addEventLike(card, item, id){
  const likeButton = card.querySelector('.gallery__like-button');
  likeButton.addEventListener('click', () => {
    if(likeButton.classList.contains('gallery__like-button_active')){
      removeLike(id)
      .then(data => {
        cardLikes(card, data);
      })
    }else{
      addLike(id)
      .then(data => {
        cardLikes(card, data);
      })
    }
    
    likeButton.classList.toggle('gallery__like-button_active');
  });
}

function deleteCard(card, id){
  const deleteButton = card.querySelector('.gallery__delete-button');
  deleteButton.addEventListener('click', () =>{
    removeCard(id);
    card.remove()
  });
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