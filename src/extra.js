export const changeStatus = (status) => !status;

export const updateStatus = (task) => {
  task.completed = changeStatus(task.completed);
  const taskName = document.getElementById(`checkbox${task.index}`);
  if (task.completed) {
    taskName.classList.remove('task-done');
  } else {
    taskName.classList.add('task-done');
  }
};

export const updateDom = (tasks) => {
  for (let i = 0; i < tasks.length; i += 1) {
    const taskName = document.getElementById(`checkbox${tasks[i].index}`);
    const taskName2 = document.getElementById(`check${tasks[i].index}`);
    if (tasks[i].completed) {
      taskName.classList.remove('task-done');
      taskName2.checked = false;
    } else {
      taskName.classList.add('task-done');
      taskName2.checked = true;
    }
  }
};
