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
    divElem.addEventListener('click', logGreenDiv, { capture: false, passive: false });
    divElem.addEventListener('click', logGreyDiv, { capture: true, passive: false });

    pElem.addEventListener('click', logGreenP, { capture: false, passive: false });
    pElem.addEventListener('click', logGreyP, { capture: true, passive: false });

    spanElem.addEventListener('click', logGreenSpan, { capture: false, passive: false });
    spanElem.addEventListener('click', logGreySpan, { capture: true, passive: false });
};

const removeHandlers = () => {
    divElem.removeEventListener('click', logGreenDiv, { capture: false });
    divElem.removeEventListener('click', logGreyDiv, { capture: true });

    pElem.removeEventListener('click', logGreenP, { capture: false });
    pElem.removeEventListener('click', logGreyP, { capture: true });

    spanElem.removeEventListener('click', logGreenSpan, { capture: false });
    spanElem.removeEventListener('click', logGreySpan, { capture: true });
};

const clearEvents = () => {
    eventsListElem.innerHTML = '';
};

document.querySelector('.attach-handlers-btn').addEventListener('click', attachHandlers);
document.querySelector('.remove-handlers-btn').addEventListener('click', removeHandlers);
document.querySelector('.clear-btn').addEventListener('click', clearEvents);
