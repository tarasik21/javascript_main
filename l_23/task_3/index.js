const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
  ];
  
  const listElem = document.querySelector('.list');
  const inputElem = document.querySelector('.task-input');
  const createBtn = document.querySelector('.create-task-btn');
  
  const renderTasks = tasksList => {
    listElem.innerHTML = ''; 
    const tasksElems = tasksList
      .sort((a, b) => a.done - b.done)
      .map(({ text, done }) => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = done;
        checkbox.classList.add('list__item-checkbox');
        if (done) {
          listItemElem.classList.add('list__item_done');
        }
        listItemElem.append(checkbox, text);
  
        return listItemElem;
      });
  
    listElem.append(...tasksElems);
  };
  
  renderTasks(tasks);
  

  createBtn.addEventListener('click', () => {
    const taskText = inputElem.value.trim();
    if (!taskText) return;
  
    const newTask = { text: taskText, done: false };
    tasks.push(newTask);
    inputElem.value = '';
    renderTasks(tasks);
  });
  

  listElem.addEventListener('click', (event) => {
    if (!event.target.classList.contains('list__item-checkbox')) return;
  
    const taskIndex = Array.from(listElem.children).indexOf(event.target.closest('.list__item'));
    tasks[taskIndex].done = event.target.checked;
    renderTasks(tasks);
  });
  