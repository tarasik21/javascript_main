export function finishList() {
    const listElem = document.querySelector('.list'); 


    const firstItem = document.createElement('li');
    const fourthItem = document.createElement('li');
    const sixthItem = document.createElement('li');
    const eighthItem = document.createElement('li');

    firstItem.textContent = '1'; 
    fourthItem.textContent = '4'; 
    sixthItem.textContent = '6'; 
    eighthItem.textContent = '8'; 

    listElem.prepend(firstItem);

    const specialItem = document.querySelector('.special'); 
specialItem.before(fourthItem); 
specialItem.after(sixthItem);  

listElem.append(eighthItem); 




}



