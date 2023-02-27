const textInput = document.querySelector('#validation-input');


textInput.addEventListener('blur', () => {
    textInput.classList.toggle('invalid', textInput.value.length !== Number(textInput.getAttribute('data-length')))

    textInput.classList.toggle('valid', textInput.value.length === Number (textInput.getAttribute('data-length')))
    
});
    
