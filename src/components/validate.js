function addErrorInput(settings, form, input, errorMessage) {
  const errorEl = form.querySelector(`.${input.id}-error`);
  input.classList.add(settings.inputErrorClass);
  errorEl.classList.add(settings.errorClass);
  errorEl.textContent = errorMessage;
}

function removeErrorInput(settings, form, input) {
  const errorEl = form.querySelector(`.${input.id}-error`);
  input.classList.remove(settings.inputErrorClass);
  errorEl.classList.remove(settings.errorClass);
  errorEl.textContent = '';
}

function isValid(settings, formElement, inputElement) {
  if (!inputElement.validity.valid) {
    addErrorInput(settings, formElement, inputElement, inputElement.validationMessage);
  } else {
    removeErrorInput(settings, formElement, inputElement);
  }
}

function setEventListeners(settings, form) {
  const inputs = Array.from(form.querySelectorAll(settings.inputSelector));
  const button = form.querySelector(settings.submitButtonSelector);

  toggleButtonState(settings, form, inputs);
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      isValid(settings, form, input);
      toggleButtonState(settings, form, inputs);
    });
  })
  form.addEventListener('reset', () => {
    disableButton(button, settings)
  })
}

function checkValidInput(inputs) {
  return inputs.some((input) => {
    return !input.validity.valid;
  })
}

function toggleButtonState(settings, form, inputs) {
  const button = form.querySelector(settings.submitButtonSelector);
  if (checkValidInput(inputs)) {
    disableButton(button, settings)
  } else {
    enableButton(button, settings)
  }
}

function disableButton(button, settings) {
  button.classList.add(settings.inactiveButtonClass);
  button.setAttribute('disable', '');
}

function enableButton(button, settings) {
  button.classList.remove(settings.inactiveButtonClass);
  button.removeAttribute('disable');
}

function enableValidation(settings) {
  const arrForm = Array.from(document.querySelectorAll(settings.formSelector));
  arrForm.forEach(form => {
    setEventListeners(settings, form)
  });
}

export { enableValidation, enableButton }