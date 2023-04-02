const buttonEdit = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const inputUsername = popup.querySelector('.popup__input_type_username');
const inputAboutUser = popup.querySelector('.popup__input_type_about-user');
const username = document.querySelector('.profile__username');
const aboutUser = document.querySelector('.profile__about-user');
const buttonClose = popup.querySelector('.popup__close');
const buttonSave = popup.querySelector('.popup__save');

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

buttonEdit.addEventListener('click', () => {
  popup.classList.add('popup_opened');
  inputUsername.value = username.textContent;
  inputAboutUser.value = aboutUser.textContent;
});

buttonClose.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
  inputUsername.value = '';
  inputAboutUser.value = '';
})

function handleFormSubmit(evt){
  evt.preventDefault();
  popup.classList.remove('popup_opened');
  username.textContent = inputUsername.value;
  aboutUser.textContent = inputAboutUser.value;

}

buttonSave.addEventListener('click', handleFormSubmit);

initialCards.forEach((item) => {
  const card = templateCard.querySelector('.gallery__item').cloneNode(true);
  const cardImage = card.querySelector('.gallery__image');
  const cardTitle = card.querySelector('.gallery__title');
  cardImage.src= item.link;
  cardImage.alt= item.name;
  cardTitle.textContent = item.name;

  gallery.append(card);
});


