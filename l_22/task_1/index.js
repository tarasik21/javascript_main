const logTarget = (text, color) => {
    const eventsList = document.querySelector('.events-list');
    const span = document.createElement('span');
    span.style.color = color;
    span.style.marginLeft = '8px';
    span.textContent = text;
    eventsList.appendChild(span);
};

const attachHandlers = () => {
    document.querySelector('.rect_div')
        .addEventListener('click', () => logTarget('div', 'green'), false);
    document.querySelector('.rect_p')
        .addEventListener('click', () => logTarget('p', 'green'), false);
    document.querySelector('.rect_span')
        .addEventListener('click', () => logTarget('span', 'green'), false);

    document.querySelector('.rect_div')
        .addEventListener('click', () => logTarget('div', 'grey'), true);
    document.querySelector('.rect_p')
        .addEventListener('click', () => logTarget('p', 'grey'), true);
    document.querySelector('.rect_span')
        .addEventListener('click', () => logTarget('span', 'grey'), true);
};

const removeHandlers = () => {
    document.querySelector('.rect_div')
        .removeEventListener('click', () => logTarget('div', 'green'), false);
    document.querySelector('.rect_p')
        .removeEventListener('click', () => logTarget('p', 'green'), false);
    document.querySelector('.rect_span')
        .removeEventListener('click', () => logTarget('span', 'green'), false);

    document.querySelector('.rect_div')
        .removeEventListener('click', () => logTarget('div', 'grey'), true);
    document.querySelector('.rect_p')
        .removeEventListener('click', () => logTarget('p', 'grey'), true);
    document.querySelector('.rect_span')
        .removeEventListener('click', () => logTarget('span', 'grey'), true);
};

const clearEvents = () => {
    document.querySelector('.events-list').innerHTML = '';
};

document.querySelector('.attach-handlers-btn')
    .addEventListener('click', attachHandlers);

document.querySelector('.remove-handlers-btn')
    .addEventListener('click', removeHandlers);

document.querySelector('.clear-btn')
    .addEventListener('click', clearEvents);

