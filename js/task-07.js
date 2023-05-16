const rangeInputElement = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

rangeInputElement.addEventListener('input', () => {
  const inputValue = rangeInputElement.value;
  textElement.style.fontSize = `${inputValue}px`;
});
