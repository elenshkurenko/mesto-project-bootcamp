function cleanInput(popup){
  const form = popup.querySelector('.popup__form')
  if(form){
    form.reset();
  }
}

function startSend(button){
  button.textContent = 'Сохранение...'
}

function endSend(button, text='Сохранить'){
  button.textContent = text;
}

function checkResponse(res) {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function disableButton(button){
    button.classList.add('popup__save_inactive');
    button.setAttribute('disable', '');
}

function enableButton(button) {
  button.classList.remove('popup__save_inactive');
    button.removeAttribute('disable');
}

export {cleanInput, startSend, endSend, checkResponse, disableButton, enableButton}
