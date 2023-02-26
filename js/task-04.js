const refs = {
    counterValue: document.querySelector('#value'),
    decrementButton: document.querySelector('[data-action="decrement"]'),
    incrementButton: document.querySelector('[data-action="increment"]'),
};
refs.decrementButton.addEventListener('click', (event) => {
  refs.counterValue.textContent -= 1;
  });
refs.incrementButton.addEventListener('click', (event) => {
let total = parseInt(refs.counterValue.textContent);
refs.counterValue.textContent = total + 1;
});


