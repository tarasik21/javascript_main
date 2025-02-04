export function clearList() {
    const bodyElem = document.querySelector('.categories'); 
    if (bodyElem) { 
        bodyElem.innerHTML = ''; 
    }
}
