class App {
  constructor() {
    this.container = document.getElementById('app');

    const taskList = document.createElement('ul');

    taskList.classList.add('task-list');

    this.taskListContainer = taskList;
    this.container.replaceWith(this.taskListContainer);
  }

  addToDo(task) {
    const item = document.createElement('li');
    const checkbox = document.createElement('input');

    item.textContent = task.text;
    item.classList.add('task-item');

    checkbox.type = 'checkbox';
    checkbox.classList.add('task-item-checkbox');
    checkbox.checked = task.done;

    item.append(checkbox);
    this.taskListContainer.append(item);
  }
}

const myToDo = new App();
myToDo.addToDo({
  text: 'buy bred',
  done: false,
});
myToDo.addToDo({
  text: 'checking',
  done: true,
});
console.log(myToDo);
