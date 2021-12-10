export const add = (tasks) => {
  let taskValue =document.getElementById('app-input').value;
  if (taskValue != '') {
    tasks.push({description:`${taskValue}`,completed: true,index: tasks.length});
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};
