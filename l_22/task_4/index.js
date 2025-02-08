
const checkbox = document.querySelector('.task-status');


checkbox.addEventListener('change', function() {

  console.log(checkbox.checked);
  

  console.log('value property:', checkbox.value);
});