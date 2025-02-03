export function getItemsList() {
    const itemsList =document.querySelectorAll('.technology');
    console.dir(itemsList);
    return itemsList
  }
  export function getItemsArray() {
    const elementsArray = document.querySelectorAll('.tool'); 
    const arrayFromNodeList = Array.from(elementsArray); 
    console.dir(arrayFromNodeList); 
    return arrayFromNodeList; 
  }
