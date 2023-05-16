const inputValueElement = document.querySelector('#validation-input');

inputValueElement.addEventListener('blur', () => {
  const inputValue = inputValueElement.value.trim();
  const inputLength = Number(inputValueElement.getAttribute('data-length'));
  if (inputValue.length === inputLength) {
    inputValueElement.classList.add('valid');
    inputValueElement.classList.remove('invalid');
  } else {
    inputValueElement.classList.remove('valid');
    inputValueElement.classList.add('invalid');
  }
});
