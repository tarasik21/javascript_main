document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.querySelector(".error-text_email");
    const passwordError = document.querySelector(".error-text_password");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      let isValid = true;
  
      if (!emailInput.value) {
        emailError.textContent = "Required";
        isValid = false;
      } else if (!emailInput.value.includes("@")) {
        emailError.textContent = "Should be an email";
        isValid = false;
      } else {
        emailError.textContent = "";
      }
  
      if (!passwordInput.value) {
        passwordError.textContent = "Required";
        isValid = false;
      } else {
        passwordError.textContent = "";
      }
  
      if (isValid) {
        const formData = Object.fromEntries(new FormData(form));
        alert(JSON.stringify(formData));
      }
    });
  
    form.addEventListener("input", (event) => {
      if (event.target === emailInput) {
        emailError.textContent = "";
      } else if (event.target === passwordInput) {
        passwordError.textContent = "";
      }
    });
  });
  