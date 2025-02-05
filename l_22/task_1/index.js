const logTarget = (text, color) => {
    const eventsList = document.querySelector('.events-list');
    const span = document.createElement('span');
    span.style.color = color;
    span.style.marginLeft = '8px';
    span.textContent = text;
    eventsList.appendChild(span);
};

// Обработчики всплытия (bubbling)
const logGreenDiv = () => logTarget('DIV', 'green');
const logGreenP = () => logTarget('P', 'green');
const logGreenSpan = () => logTarget('SPAN', 'green');

// Обработчики погружения (capturing)
const logGreyDiv = () => logTarget('DIV', 'grey');
const logGreyP = () => logTarget('P', 'grey');
const logGreySpan = () => logTarget('SPAN', 'grey');

const attachHandlers = () => {
    document.querySelector('.rect_div').addEventListener('click', logGreenDiv, false);
    document.querySelector('.rect_p').addEventListener('click', logGreenP, false);
    document.querySelector('.rect_span').addEventListener('click', logGreenSpan, false);

    document.querySelector('.rect_div').addEventListener('click', logGreyDiv, true);
    document.querySelector('.rect_p').addEventListener('click', logGreyP, true);
    document.querySelector('.rect_span').addEventListener('click', logGreySpan, true);
};

const removeHandlers = () => {
    document.querySelector('.rect_div').removeEventListener('click', logGreenDiv, false);
    document.querySelector('.rect_p').removeEventListener('click', logGreenP, false);
    document.querySelector('.rect_span').removeEventListener('click', logGreenSpan, false);

    document.querySelector('.rect_div').removeEventListener('click', logGreyDiv, true);
    document.querySelector('.rect_p').removeEventListener('click', logGreyP, true);
    document.querySelector('.rect_span').removeEventListener('click', logGreySpan, true);
};

const clearEvents = () => {
    document.querySelector('.events-list').innerHTML = '';
};

document.querySelector('.attach-handlers-btn').addEventListener('click', attachHandlers);
document.querySelector('.remove-handlers-btn').addEventListener('click', removeHandlers);
document.querySelector('.clear-btn').addEventListener('click', clearEvents);
