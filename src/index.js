import './style.css';
import { updateStatus, updateDom } from './extra.js';
import { add } from './crud.js';

let tasks = [];


if (JSON.parse(localStorage.getItem('tasks')) != null) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
} else {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const remove = (index) => {
  const element = document.getElementById(`task${index}`);
  const taskName = document.getElementById(`checkbox${index}`);
  if (!taskName.classList.contains('clicked')) {
    taskName.classList.add('clicked');
    const remove = document.createElement('button');
    remove.id = `remove${index}`;
    remove.innerHTML='-';
    remove.addEventListener('click', () => {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      document.getElementById('list').innerHTML='';
      document.body.appendChild(displayList(tasks));
    });
    element.appendChild(remove);
    remove.classList.add('delete');
  }else {
    taskName.classList.remove('clicked');
    const remove = document.getElementById(`remove${index}`);
    element.removeChild(remove);
  }
};


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
  inputBtn.innerHTML='+';
  inputBtn.addEventListener('click', () => {
    add(tasks);
    document.getElementById('list').innerHTML='';
    document.body.appendChild(displayList(tasks));
  });

  inputDiv.appendChild(input);
  inputDiv.appendChild(inputBtn);
  task.appendChild(inputDiv);

  // Add the tasks
  for (let i = 0; i < arr.length; i += 1) {
    const element = document.createElement('div');
    element.id = `task${arr[i].index}`;

    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    checkbox.id = `check${arr[i].index}`;
    checkbox.addEventListener('change', () => {
      updateStatus(arr[i]);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    element.appendChild(checkbox);

    const taskName = document.createElement('span');
    taskName.innerHTML = `${arr[i].description}`;
    taskName.id = `checkbox${arr[i].index}`;
    taskName.addEventListener('click', () => {
      remove(arr[i].index);
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
    alert('hi');
  });
  task.appendChild(clear);
  return task;
};

document.body.appendChild(displayList(tasks));
