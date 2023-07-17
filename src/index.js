/* eslint-disable import/no-cycle */
import add from './modules/addRemove.js';
import { removeAllTask, removeTask } from './modules/remove.js';
import updateCompletedTask from './modules/updateCompleted.js';
import './styles/style.css';

let tasks = [];
export const main = document.querySelector('.container');
const getData = () => {
  tasks = JSON.parse(localStorage.getItem('datas')) ?? [];
  main.innerHTML = '';
  /* eslint-disable */
  document.body.appendChild(component());
  /* eslint-enable */
};

export default getData;
const showTask = (i) => {
  const li = document.createElement('li');
  li.classList.add('added');
  const checkbox = document.createElement('input');
  const desc = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  updateCompletedTask(tasks, desc, checkbox, i);
  desc.setAttribute('type', 'text');
  desc.setAttribute('id', `taskField-${i}`);
  desc.classList.add('taskField');
  desc.setAttribute('value', tasks[i].description);
  desc.addEventListener('change', () => {
    tasks[i].description = desc.value;
    localStorage.setItem('datas', JSON.stringify(tasks));
    getData();
  });
  li.appendChild(checkbox);
  li.appendChild(desc);
  const myIcon = document.createElement('span');
  myIcon.innerHTML = 'delete';
  myIcon.classList.add('material-symbols-rounded');
  myIcon.addEventListener('click', () => {
    removeTask(i);
    getData();
  });
  li.appendChild(myIcon);
  const more = document.createElement('span');
  more.innerHTML = 'more_vert';
  more.classList.add('material-symbols-outlined');
  li.appendChild(more);
  return li;
};

function component() {
  const h1 = document.createElement('div');
  h1.classList.add('header');
  h1.innerHTML = '<h1>Today\'s To Do</h1>';
  h1.innerHTML += '<span class="material-symbols-outlined">sync</span>';
  main.appendChild(h1);

  const form = document.createElement('form');
  form.classList.add('taskFormClass');
  form.setAttribute('action', '#');
  form.setAttribute('id', 'taskForm');
  form.addEventListener('submit', () => {
    add();
    getData();
  });

  const addToTask = document.createElement('input');
  addToTask.setAttribute('type', 'text');
  addToTask.setAttribute('placeholder', 'Add to your list...');
  addToTask.setAttribute('id', 'newTask');

  const returnToSubmit = document.createElement('span');
  returnToSubmit.innerHTML = 'keyboard_return';
  returnToSubmit.classList.add('material-symbols-outlined');
  returnToSubmit.classList.add('return');

  form.appendChild(addToTask);
  form.appendChild(returnToSubmit);

  main.appendChild(form);

  const ul = document.createElement('ul');
  tasks.forEach((tsk, i) => {
    if (i >= 0) { ul.appendChild(showTask(i)); }
  });

  main.appendChild(ul);

  const clearButton = document.createElement('input');
  clearButton.setAttribute('type', 'button');
  clearButton.setAttribute('value', 'Clear all completed');
  clearButton.addEventListener('click', () => {
    removeAllTask();
    getData();
  });
  main.appendChild(clearButton);

  return main;
}

window.addEventListener('DOMContentLoaded', () => {
  getData();
});
