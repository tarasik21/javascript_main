const buttons = document.querySelectorAll('.btn'); 

buttons.forEach(function(button) {
    button.addEventListener('click', function handleClick(event) {
        console.log(event.target.textContent); 
    });
});
