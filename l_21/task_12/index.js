export function squaredNumbers(){
    const numberElems = document.querySelectorAll('.number');

    numberElems.forEach(element => {
        const number = Number(element.dataset.number);
        const squared = number * number;
        element.dataset.squaredNumber = squared;
    });
}