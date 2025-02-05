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
