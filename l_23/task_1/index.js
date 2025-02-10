const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const formElem = document.querySelector('.login-form');


const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');


const isEmail = email => email.includes('@');

const onEmailChange = event => {
  const isValidEmail = isEmail(event.target.value);
  
  if (!event.target.value) {
    emailErrorElem.textContent = 'Required';
    emailInputElem.classList.add('invalid');
  } else if (!isValidEmail) {
    emailErrorElem.textContent = 'Should be an email';
    emailInputElem.classList.add('invalid');
  } else {
    emailErrorElem.textContent = '';
    emailInputElem.classList.remove('invalid');
  }
};

const onPasswordChange = event => {
  if (!event.target.value) {
    passwordErrorElem.textContent = 'Required';
    passwordInputElem.classList.add('invalid');
  } else {
    passwordErrorElem.textContent = '';
    passwordInputElem.classList.remove('invalid');
  }
};


emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);


const onFormSubmit = event => {
  event.preventDefault();
  
  const formData = Object.fromEntries(new FormData(formElem));
  

  if (!formData.email) {
    emailErrorElem.textContent = 'Required';
    emailInputElem.classList.add('invalid');
  }
  
  if (!formData.password) {
    passwordErrorElem.textContent = 'Required';
    passwordInputElem.classList.add('invalid');
  }
  
  if (formData.email && formData.password && isEmail(formData.email)) {
    alert(JSON.stringify(formData));
  }
};

formElem.addEventListener('submit', onFormSubmit);