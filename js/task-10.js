function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const box = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', onDestroyBtnClick);

function createBoxes() {
  const newBoxes = document.createDocumentFragment();

  for (let i = 0; i < input.value; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    newBoxes.append(newBox);
  }
  box.append(newBoxes);
}

function onDestroyBtnClick() {
  box.innerHTML = '';
}
