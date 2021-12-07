import _ from 'lodash';
import './style.css';

const tasks = [
  {
    description: 'task 1 description',
    completed: true,
    index: 0,
  },
  {
    description: 'task 2 description',
    completed: false,
    index: 1,
  },
  {
    description: 'task 3 description',
    completed: true,
    index: 2,
  },
];

tasks[0] = {};

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
