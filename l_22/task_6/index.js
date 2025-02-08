const btnElem = document.querySelector('.single-use-btn');
    

btnElem.addEventListener('click', function() {
    console.log('clicked');
}, { once: true });