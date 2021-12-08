import './style.css';

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
  sortArray(tasks);
  const task = document.getElementById('list');
  for (let i = 0; i < arr.length; i += 1) {
    const element = document.createElement('li');
    element.innerHTML = `${arr[i].description}`;
    task.appendChild(element);
  }
  return task;
};

document.body.appendChild(displayList(tasks));
