const inputElem = document.querySelector('.text-input');

inputElem.addEventListener("change", function() {
  alert("Значение изменилось: " + inputElem.value);
});
