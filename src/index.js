import './style.css';
import { sortArray, updateStatus, updateDom } from './extra.js';
import {
  add, displayRemoveBtn, remove, checkCompleted, update,
} from './crud.js';

// array of tasks
let tasks = [];

// Set up localStorage
if (JSON.parse(localStorage.getItem('tasks')) != null) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
} else {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// render element
const task = document.getElementById('list');

// display tasks
const displayList = (arr) => {
  // sort the arry before display it
  sortArray(tasks);

  // style the app container
  task.classList.add('app');

  // title of the app
  const title = document.createElement('span');
  title.innerHTML = '<b>To do list</b>';
  title.classList.add('app-title');
  task.appendChild(title);

  // input of the app
  const inputDiv = document.createElement('div');
  const input = document.createElement('input');
  input.classList.add('app-input');
  input.id = 'app-input';
  input.placeholder = 'add your list...';

  const inputBtn = document.createElement('button');
  inputBtn.innerHTML = '+';
  inputBtn.addEventListener('click', () => {
    add(tasks);
    document.getElementById('list').innerHTML = '';
    document.body.appendChild(displayList(tasks));
  });

  inputDiv.appendChild(input);
  inputDiv.appendChild(inputBtn);
  task.appendChild(inputDiv);

  // display the tasks
  for (let i = 0; i < arr.length; i += 1) {
    const element = document.createElement('div');
    element.id = `task${arr[i].index}`;

    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    checkbox.id = `check${arr[i].index}`;
    checkbox.addEventListener('change', () => {
      updateStatus(arr[i]);
      localStorage.setItem('tasks', JSON.stringify(arr));
    });

    element.appendChild(checkbox);

    const taskName = document.createElement('span');
    taskName.innerHTML = `${arr[i].description}`;
    taskName.id = `checkbox${arr[i].index}`;
    taskName.classList.add('task-name');
    taskName.addEventListener('click', () => {
      displayRemoveBtn(arr[i].index, arr);
      const removeBtn = document.getElementById(`remove${arr[i].index}`);
      removeBtn.addEventListener('click', () => {
        remove(arr[i].index, arr);
        document.getElementById('list').innerHTML = '';
        document.body.appendChild(displayList(arr));
      });
      const taskEdit = document.getElementById(`taskEdit${arr[i].index}`);
      taskEdit.classList.add('edit');
      taskEdit.addEventListener('click', () => {
        taskEdit.addEventListener('click', () => {
          update(arr[i].index, taskEdit, arr);
          document.getElementById('list').innerHTML = '';
          document.body.appendChild(displayList(arr));
        });
      });
    });
    element.appendChild(taskName);

    element.classList.add('item');
    task.appendChild(element);
  }
  updateDom(tasks);

  // clear btn
  const clear = document.createElement('button');
  clear.innerHTML = 'Clear all completed';
  clear.classList.add('clear-btn');
  clear.addEventListener('click', () => {
    tasks = tasks.filter(checkCompleted);
    // re-indexing
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.getElementById('list').innerHTML = '';
    document.body.appendChild(displayList(tasks));
  });
  task.appendChild(clear);
  return task;
};

document.getElementById('list').innerHTML = '';
document.body.appendChild(displayList(tasks));
