const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {
    const eventListElem = document.querySelector('.events-list');


    const span = document.createElement('span');
    span.textContent = text;
    span.style.color = color;
    span.style.marginLeft = '8px';


    eventListElem.appendChild(span);
};


const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');


const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');


divElem.addEventListener('click', logGreenDiv);
divElem.addEventListener('click', logGreyDiv, true);

pElem.addEventListener('click', logGreenP);
pElem.addEventListener('click', logGreyP, true);

spanElem.addEventListener('click', logGreenSpan);
spanElem.addEventListener('click', logGreySpan, true);


