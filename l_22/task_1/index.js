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


const logGreenDiv = () => logTarget('DIV', 'green');
const logGreenP = () => logTarget('P', 'green');
const logGreenSpan = () => logTarget('SPAN', 'green');

const logGreyDiv = () => logTarget('DIV', 'grey');
const logGreyP = () => logTarget('P', 'grey');
const logGreySpan = () => logTarget('SPAN', 'grey');


const attachHandlers = () => {
    divElem.addEventListener('click', logGreenDiv, false);
    divElem.addEventListener('click', logGreyDiv, true);

    pElem.addEventListener('click', logGreenP, false);
    pElem.addEventListener('click', logGreyP, true);

    spanElem.addEventListener('click', logGreenSpan, false);
    spanElem.addEventListener('click', logGreySpan, true);
};

const removeHandlers = () => {
    divElem.removeEventListener('click', logGreenDiv, false);
    divElem.removeEventListener('click', logGreyDiv, true);

    pElem.removeEventListener('click', logGreenP, false);
    pElem.removeEventListener('click', logGreyP, true);

    spanElem.removeEventListener('click', logGreenSpan, false);
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
