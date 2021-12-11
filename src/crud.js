export const add = (tasks) => {
  const taskValue = document.getElementById('app-input').value;
  if (taskValue !== '') {
    tasks.push({ description: `${taskValue}`, completed: false, index: tasks.length });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};

export const displayRemoveBtn = (index) => {
  const element = document.getElementById(`task${index}`);
  const taskName = document.getElementById(`checkbox${index}`);
  if (!taskName.classList.contains('clicked')) {
    taskName.classList.add('clicked');
    element.classList.add('clicked');
    const remove = document.createElement('button');

    // for updating
    const taskEdit = document.createElement('input');
    taskEdit.id = `taskEdit${index}`;
    taskEdit.value = taskName.innerHTML;
    // for updating
    element.removeChild(taskName);
    remove.id = `remove${index}`;
    remove.innerHTML = '-';
    element.appendChild(remove);
    element.appendChild(taskEdit);
    remove.classList.add('delete');
  }
};

export const remove = (index, tasks) => {
  tasks.splice(index, 1);
  // re-indexing
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export function checkCompleted(task) {
  return !task.completed;
}

export const update = (index, editvalue, tasks) => {
  tasks[index].description = editvalue.value;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
