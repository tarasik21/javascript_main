function addClickHandler(button) {
    button.addEventListener('click', function handleClick(event) {
        console.log(event.target.textContent); 
    });
}


const buttons = document.querySelectorAll('.btn');


buttons.forEach(addClickHandler);