function addErrorInput(settings, form, input, errorMessage){
  const errorEl = form.querySelector(`.${input.id}-error`);
  input.classList.add(settings.inputErrorClass);
  errorEl.classList.add(settings.errorClass);
  errorEl.textContent = errorMessage; 
}

function removeErrorInput(settings, form, input){
  const errorEl = form.querySelector(`.${input.id}-error`);
  input.classList.remove(settings.inputErrorClass);
  errorEl.classList.remove(settings.errorClass); 
  errorEl.textContent = '';
}

function isValid(settings, formElement, inputElement){
  if(!inputElement.validity.valid){
    addErrorInput(settings, formElement, inputElement, inputElement.validationMessage);
  }else{
    removeErrorInput(settings, formElement, inputElement);
  }
}

function setEventListeners(settings, form){
  const inputs = Array.from(form.querySelectorAll(settings.inputSelector));
  toggleButtonState(settings, form, inputs);
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      isValid(settings, form, input);
      toggleButtonState(settings, form, inputs);
    });
  })
  form.addEventListener('submit', () => {
      toggleButtonState(settings, form, inputs);
  })
}

function checkValidInput(inputs) {
  return inputs.some( (input) => {
    console.log(input, input.validity.valid)
    console.log(input.value)
    return !input.validity.valid;
  })
}

function toggleButtonState(settings, form, inputs){
  const button = form.querySelector(settings.submitButtonSelector);
  if(checkValidInput(inputs)){
    button.classList.add(settings.inactiveButtonClass);
    button.setAttribute('disable', '');
  }else{
    button.classList.remove(settings.inactiveButtonClass);
    button.removeAttribute('disable');
  }
}

function enableValidation(settings){
  const arrForm = Array.from(document.querySelectorAll(settings.formSelector));
  arrForm.forEach(form => {
    setEventListeners(settings, form)
  });
}



export {enableValidation, toggleButtonState}