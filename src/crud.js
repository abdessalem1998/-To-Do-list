export const add = (tasks) => {
  let taskValue =document.getElementById('app-input').value;
  if (taskValue != '') {
    tasks.push({description:`${taskValue}`,completed: true,index: tasks.length});
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};

export const displayRemoveBtn = (index,tasks) => {
  const element = document.getElementById(`task${index}`);
  const taskName = document.getElementById(`checkbox${index}`);
  if (!taskName.classList.contains('clicked')) {
    taskName.classList.add('clicked');
    const remove = document.createElement('button');
    remove.id = `remove${index}`;
    remove.innerHTML='-';
    element.appendChild(remove);
    remove.classList.add('delete');
  }else {
    taskName.classList.remove('clicked');
    const remove = document.getElementById(`remove${index}`);
    element.removeChild(remove);
  }
};

export const remove = (index,tasks) => {
  tasks.splice(index, 1);
  //re-indexing
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].index=i;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
