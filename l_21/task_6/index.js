export function setButton(buttonText) {
    const bodyElem = document.querySelector('body'); 
    bodyElem.innerHTML = `<button>${buttonText}</button>`; 
}

