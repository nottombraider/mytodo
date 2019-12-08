class App {
  constructor() {
    this.container = document.getElementById('app');

    const taskList = document.createElement('ul');
    const buttonAddNewTask = document.createElement('button');
    const inputTaskField = document.createElement('input');
    const buttonDeleteCompletedTasks = document.createElement('button');

    taskList.classList.add('task-list');
    buttonAddNewTask.classList.add('button-add-new-task');
    inputTaskField.classList.add('input-task-field');
    buttonDeleteCompletedTasks.classList.add('button-delete-completed-tasks');

    buttonAddNewTask.innerHTML = 'Add new task';
    inputTaskField.type = 'text';
    inputTaskField.placeholder = 'Write here your task';
    buttonDeleteCompletedTasks.innerHTML = 'Delete completed tasks';
    this.container.innerHTML = '';

    this.taskListContainer = taskList;
    this.container.appendChild(this.taskListContainer);
    this.container.appendChild(inputTaskField);
    this.container.appendChild(buttonAddNewTask);
    this.container.appendChild(buttonDeleteCompletedTasks);
  }


  addToDo(task) {
    const item = document.createElement('li');
    const checkbox = document.createElement('input');

    item.textContent = task.text;
    item.classList.add('task-item', 'flex');

    checkbox.type = 'checkbox';
    checkbox.classList.add('task-item-checkbox');
    checkbox.checked = task.done;

    item.append(checkbox);
    this.taskListContainer.append(item);
  }

  // eslint-disable-next-line class-methods-use-this
  removeToDos() {
    const checked = document.querySelectorAll('input[type=checkbox]:checked');

    checked.forEach((item) => {
      item.parentElement.remove();
    });
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
myToDo.removeToDos();
