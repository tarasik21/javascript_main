const statusElem = document.querySelector('.task_status'); 
const inputElem = document.querySelector('.text-input')

statusElem.addEventListener("change", function() {
  console.log(statusElem.checked); 
});
