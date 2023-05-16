const colorButton = document.querySelector('.change-color');
const bodyElement = document.querySelector('body');
const colorDescription = document.querySelector('.color');

colorButton.addEventListener('click', () => {
  bodyElement.style.backgroundColor = getRandomHexColor();
  colorDescription.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
