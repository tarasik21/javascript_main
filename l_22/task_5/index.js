const btnElem = document.querySelector('.search__btn');
const inputElem = document.querySelector('.search__input');
btnElem.addEventListener('click', function() {
    console.log(inputElem.value);
  });