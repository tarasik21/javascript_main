const statusElement = document.querySelector('.task-status');
statusElement.addEventListener('change', function(event){
    console.log(event.target.checked)
})