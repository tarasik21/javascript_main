
const paginationElems = document.querySelectorAll('.pagination__page');


function handleClick(event) {

    const data = event.target.dataset.pageNumber;

    console.log(data);
}


paginationElems.forEach(button => {
    button.addEventListener('click', handleClick);
});
