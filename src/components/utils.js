function closePopup(popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', (evt) => closePopupEsc(evt, popup));
}
function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => closePopupEsc(evt, popup));
}
function cleanInput(popup){
  if(popup.querySelector('.popup__form')){
    popup.querySelector('.popup__form').reset();
  }
 
}
function closePopupEsc(evt, popup){
  if(evt.key === 'Escape'){
    closePopup(popup);
    cleanInput(popup)
  }
}

export {closePopup, openPopup, cleanInput}
