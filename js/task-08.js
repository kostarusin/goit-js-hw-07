const submitForm = document.querySelector('.login-form');

submitForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (this.elements.email.value === '' || this.elements.password.value === '') {
    alert('all fields must be filled');
  } else {
    const formData = {
      email: this.elements.email.value,
      password: this.elements.password.value,
    };

    console.log(formData);

    submitForm.reset();
  }
}
