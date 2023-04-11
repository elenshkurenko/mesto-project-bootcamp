function addErrorInput(form, input, errorMessage){
  const errorEl = form.querySelector(`.${input.id}-error`);
  input.classList.add('popup__input_type_error');
  errorEl.classList.add('popup__input-error_active');
  errorEl.textContent = errorMessage; 
}

function removeErrorInput(form, input){
  const errorEl = form.querySelector(`.${input.id}-error`);
  input.classList.remove('popup__input_type_error');
  errorEl.classList.remove('popup__input-error_active'); 
  errorEl.textContent = '';
}

function isValid(formElement, inputElement){
  if(!inputElement.validity.valid){
    addErrorInput(formElement, inputElement, inputElement.validationMessage);
  }else{
    removeErrorInput(formElement, inputElement);
  }
}

function setEventListeners(form){
  const inputs = Array.from(form.querySelectorAll(".popup__input"));
  toggleButtonState(form);
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      isValid(form, input);
      toggleButtonState(form);
    });
  })
}

function checkValidInput(inputs) {
  return inputs.some( (input) => {
    return !input.validity.valid;
  })
}

function toggleButtonState(form){
  const button = form.querySelector('.popup__save');
  const inputs = Array.from(form.querySelectorAll(".popup__input"));
  if(checkValidInput(inputs)){
    button.classList.add('popup__save_inactive');
    button.setAttribute('disable', '');
  }else{
    button.classList.remove('popup__save_inactive');
    button.removeAttribute('disable');
  }
}

function enableValidation(forms){
  forms.forEach(form => setEventListeners(form));
}



export {enableValidation, toggleButtonState}