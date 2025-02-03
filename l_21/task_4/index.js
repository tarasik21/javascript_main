'use strict';


export function getTitle() {
    const titleElem = document.querySelector('.title');
    return titleElem ? titleElem.textContent : ''; 
}


export function getDescription() {
    const descriptionElem = document.querySelector('.about');
    return descriptionElem ? descriptionElem.innerText : '';
}


export function getPlans() {
    const plansElem = document.querySelector('.plans');
    return plansElem ? plansElem.innerHTML : '';
}


export function getGoal() {
    const goalElem = document.querySelector('.goal');
    return goalElem ? goalElem.outerHTML : '';
}
