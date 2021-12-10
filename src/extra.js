export const changeStatus = (status) => !status;

export const updateStatus = (task) => {
  task.completed = changeStatus(task.completed);
  const taskName = document.getElementById(`checkbox${task.index}`);
  if (!task.completed) {
    taskName.classList.remove('task-done');
  } else {
    taskName.classList.add('task-done');
  }
};

export const updateDom = (tasks) => {
  for (let i = 0; i < tasks.length; i += 1) {
    const taskName = document.getElementById(`checkbox${tasks[i].index}`);
    const taskName2 = document.getElementById(`check${tasks[i].index}`);
    if (!tasks[i].completed) {
      taskName.classList.remove('task-done');
      taskName2.checked = false;
    } else {
      taskName.classList.add('task-done');
      taskName2.checked = true;
    }
  }
};

export const sortArray = (array) => {
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
