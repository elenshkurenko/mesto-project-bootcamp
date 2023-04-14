function closePopup(popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}
function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}
function cleanInput(popup){
  const form = popup.querySelector('.popup__form')
  if(form){
    form.reset();
  }
}
function closePopupEsc(evt){
  if(evt.key === 'Escape'){
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function startSend(button){
  button.textContent = 'Сохранение...'
}

function endSend(popup, button){
  if(popup.classList.contains('popup_new-place')){
    button.textContent = 'Создать';
  }
  button.textContent = 'Сохранить';
}

export {closePopup, openPopup, cleanInput, startSend, endSend}
