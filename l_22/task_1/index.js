const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventsListElem = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const clearField = () => {
  eventsListElem.innerHTML = '';
};

const attachHandlers = () => {
  divElem.addEventListener('click', divHandler);
  divElem.addEventListener('click', divHandlerCapturing, true);
  
  pElem.addEventListener('click', pHandler);
  pElem.addEventListener('click', pHandlerCapturing, true);
  
  spanElem.addEventListener('click', spanHandler);
  spanElem.addEventListener('click', spanHandlerCapturing, true);
};

const removeHandlers = () => {
  divElem.removeEventListener('click', divHandler);
  divElem.removeEventListener('click', divHandlerCapturing, true);
  
  pElem.removeEventListener('click', pHandler);
  pElem.removeEventListener('click', pHandlerCapturing, true);
  
  spanElem.removeEventListener('click', spanHandler);
  spanElem.removeEventListener('click', spanHandlerCapturing, true);
};

const divHandler = (event) => {
  logTarget('div', 'green');
};

const pHandler = (event) => {
  logTarget('p', 'green');
};

const spanHandler = (event) => {
  logTarget('span', 'green');
};

const divHandlerCapturing = (event) => {
  logTarget('div', 'grey');
};

const pHandlerCapturing = (event) => {
  logTarget('p', 'grey');
};

const spanHandlerCapturing = (event) => {
  logTarget('span', 'grey');
};

clearBtn.addEventListener('click', clearField);
removeHandlersBtn.addEventListener('click', removeHandlers);
attachHandlersBtn.addEventListener('click', attachHandlers);


attachHandlers();