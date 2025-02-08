const button = document.querySelector('.single-use-btn');

function clickHandler() {
  console.log('clicked');

  button.removeEventListener('click', clickHandler);
}

button.addEventListener('click', clickHandler);