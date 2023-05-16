const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const inputValue = nameInput.value.trim();
  nameOutput.textContent = inputValue !== '' ? inputValue : 'Anonymus';
});
