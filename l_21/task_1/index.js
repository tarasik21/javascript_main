'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = (tasksList) => {
  const listElem = document.querySelector('.list');
  listElem.innerHTML = ''; 

  const listItemsElems = tasksList.map(task => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');

  
    if (task.done) {
      listItemElem.classList.add('list__item_done');
    }

    // Создаём чекбокс
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('list__item-checkbox');
    checkbox.checked = task.done;


    checkbox.addEventListener('change', () => {
      task.done = checkbox.checked;
      renderTasks(tasks); 
    });

    listItemElem.append(checkbox, task.text); 
    return listItemElem;
  });

  listElem.append(...listItemsElems);
};

renderTasks(tasks); 
