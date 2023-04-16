function cleanInput(popup) {
  const form = popup.querySelector('.popup__form')
  if (form) {
    form.reset();
  }
}

function startSend(button) {
  button.textContent = 'Сохранение...'
}

function endSend(button, text = 'Сохранить') {
  button.textContent = text;
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}


export { cleanInput, startSend, endSend, checkResponse }
