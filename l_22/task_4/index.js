const statusElem = document.querySelector('.task_status'); 

statusElem.addEventListener("change", function() {
  console.log(statusElem.checked); 
});
