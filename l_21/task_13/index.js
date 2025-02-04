export function getSection(num) {
    const numberElem = document.querySelector(`span[data-number="${num}"]`);
    const boxElem = numberElem.closest('.box');
    return boxElem.dataset.section; 
}
