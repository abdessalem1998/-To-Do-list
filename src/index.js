import './style.css';
import { updateStatus } from './extra.js';

alert(updateStatus(true));

const tasks = [
  {
    description: 'task 1 description',
    completed: true,
    index: 2,
  },
  {
    description: 'task 2 description',
    completed: false,
    index: 0,
  },
  {
    description: 'task 3 description',
    completed: true,
    index: 1,
  },
];

// sort the array of tasks from small index to biger
const sortArray = (array) => {
  let temp = 0;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i; j < array.length; j += 1) {
      if (array[j].index < array[i].index) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
};

// display tasks
const displayList = (arr) => {
  // sort the arry before display it
  sortArray(tasks);

  // style the app container
  const task = document.getElementById('list');
  task.classList.add('app');

  // title of the app
  const title = document.createElement('span');
  title.innerHTML = '<b>To do list</b>';
  title.classList.add('app-title');
  task.appendChild(title);

  // input of the app
  const input = document.createElement('input');
  input.classList.add('app-input');
  input.placeholder = 'add your list...';
  task.appendChild(input);

  // Add the tasks
  for (let i = 0; i < arr.length; i += 1) {
    const element = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    element.appendChild(checkbox);

    const taskName = document.createElement('span');
    taskName.innerHTML = `${arr[i].description}`;
    element.appendChild(taskName);

    element.classList.add('item');
    task.appendChild(element);
  }

  // clear btn
  const clear = document.createElement('button');
  clear.innerHTML = 'Clear all completed';
  clear.classList.add('clear-btn');
  task.appendChild(clear);
  return task;
};

document.body.appendChild(displayList(tasks));
