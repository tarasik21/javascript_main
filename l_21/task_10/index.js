export function finishForm() {
    const formElem = document.querySelector('.login-form'); 
    const inputElem = document.querySelector('input[name="password"]'); 

    inputElem.type = 'password'; 

    const loginInput = document.createElement('input'); 
    loginInput.setAttribute('type', 'text'); 
    loginInput.setAttribute('name', 'login'); 

    formElem.prepend(loginInput); 
}
