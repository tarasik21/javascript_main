document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.querySelector(".error-text_email");
    const passwordError = document.querySelector(".error-text_password");
  
    // Функция валидации email
    function validateEmail() {
      if (!emailInput.value) {
        emailError.textContent = "Required";
      } else if (!emailInput.value.includes("@")) {
        emailError.textContent = "Should be an email";
      } else {
        emailError.textContent = "";
      }
    }
  
    // Функция валидации password
    function validatePassword() {
      if (!passwordInput.value) {
        passwordError.textContent = "Required";
      } else {
        passwordError.textContent = "";
      }
    }
  
    // Валидация при потере фокуса
    emailInput.addEventListener("blur", validateEmail);
    passwordInput.addEventListener("blur", validatePassword);
  
    // Валидация при изменении данных
    emailInput.addEventListener("input", () => {
      if (emailInput.value) {
        emailError.textContent = "";
      }
    });
  
    passwordInput.addEventListener("input", () => {
      if (passwordInput.value) {
        passwordError.textContent = "";
      }
    });
  
    // Обработчик отправки формы
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      validateEmail();
      validatePassword();
  
      if (!emailError.textContent && !passwordError.textContent) {
        const formData = Object.fromEntries(new FormData(form));
        alert(JSON.stringify(formData));
      }
    });
  });
  