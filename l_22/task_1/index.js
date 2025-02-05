const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventsListElem = document.querySelector('.events-list');


const logTarget = (text, color) => {
    const span = document.createElement('span');
    span.textContent = text;
    span.style.color = color;
    span.style.marginLeft = '8px';
    eventsListElem.appendChild(span);
};


const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');


const attachHandlers = () => {
    divElem.addEventListener('click', logGreenDiv);
    divElem.addEventListener('click', logGreyDiv, true);

    pElem.addEventListener('click', logGreenP);
    pElem.addEventListener('click', logGreyP, true);

    spanElem.addEventListener('click', logGreenSpan);
    spanElem.addEventListener('click', logGreySpan, true);
};


const removeHandlers = () => {
    divElem.removeEventListener('click', logGreenDiv);
    divElem.removeEventListener('click', logGreyDiv, true);

    pElem.removeEventListener('click', logGreenP);
    pElem.removeEventListener('click', logGreyP, true);

    spanElem.removeEventListener('click', logGreenSpan);
    spanElem.removeEventListener('click', logGreySpan, true);
};


const clearEvents = () => {
    eventsListElem.innerHTML = '';
};


document.querySelector('.attach-handlers-btn')
    .addEventListener('click', attachHandlers);

document.querySelector('.remove-handlers-btn')
    .addEventListener('click', removeHandlers);

document.querySelector('.clear-btn')
    .addEventListener('click', clearEvents);
