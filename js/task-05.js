const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");



textInput.addEventListener('input', handleChangeInput);

function handleChangeInput(event) {
    output.textContent = event.target.value.trim();


if (output.textContent.length === 0) {
    output.textContent = 'Anonymous';
}
}