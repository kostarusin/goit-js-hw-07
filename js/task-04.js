let counterValue = 0;

const counterValueElement = document.querySelector('#value');

const decrementButton = document.querySelector('[data-action="decrement"]');

decrementButton.addEventListener('click', () => {
  counterValueElement.textContent = counterValue -= 1;
});

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
incrementButton.addEventListener('click', () => {
  counterValueElement.textContent = counterValue += 1;
});
