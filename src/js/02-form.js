const formEl = document.querySelector('.feedback-form');

const FEEDBACK_KEY = 'feedback-form-state';

try {
  const initial = JSON.parse(localStorage.getItem(FEEDBACK_KEY));

  Array.from(formEl.elements).forEach(el => {
    if (initial[el.name]) {
      el.value = initial[el.name].trim();
    }
  });
} catch (error) {
  console.log(error.message);
}
formEl.addEventListener('input', evt => {
  const formData = new FormData(formEl);
  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formObject).trim());
});

formEl.addEventListener('submit', evt => {
  evt.preventDefault();

  let { email, message } = evt.currentTarget.elements;
  email = email.value.trim();
  message = message.value.trim();

  if (email === '' || message === '') {
    return;
  }

  const result = {
    email,
    message,
  };
  console.log(result);

  localStorage.removeItem(FEEDBACK_KEY);
  formEl.reset();
});
