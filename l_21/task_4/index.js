function getTitle() {
    const titleElem = document.querySelector('.title');
    return titleElem ? titleElem.textContent : ''; // Если элемент найден, вернуть текст, иначе пустую строку
}

function getDescription() {
    const descriptionElem = document.querySelector('.about');
    return descriptionElem ? descriptionElem.innerText : '';
}

function getPlans() {
    const plansElem = document.querySelector('.plans');
    return plansElem ? plansElem.innerHTML : '';
}

function getGoal() {
    const goalElem = document.querySelector('.goal');
    return goalElem ? goalElem.outerHTML : '';
}

