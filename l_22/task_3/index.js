const inputElem = document.querySelector('.text-input');

inputElem.addEventListener("input", function() {
    console.log("Current input: " + inputElem.value);
  });
