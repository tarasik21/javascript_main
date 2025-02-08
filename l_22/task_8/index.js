const textElement = document.querySelector('.text-input');
textElement.addEventListener('change', function(event) {
    console.log(event.target.value);
  });