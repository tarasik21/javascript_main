
document.addEventListener("DOMContentLoaded", function () {

    const inputElem = document.querySelector('.text-input');
    const statusElem = document.querySelector('.task-status');
    

    inputElem.addEventListener("input", function() {

      console.log("Checkbox checked:", statusElem.checked);
    });
  });
  