class App {
  constructor() {
    this.container = document.getElementById('app');

    const taskList = document.createElement('ul');
    const buttonDeleteCompletedTasks = document.createElement('button');
    const addTask = document.createElement('div');
    const buttonAddNewTask = document.createElement('button');
    const inputTaskField = document.createElement('input');

    buttonAddNewTask.addEventListener('click', () => {
      const text = inputTaskField.value;
      if (text.length) {
        const task = {
          text,
          done: false,
        };
        this.addToDo(task);
      } else {
        alert('To Do cannot be empty');
      }

    })


    taskList.classList.add('task-list');
    buttonDeleteCompletedTasks.classList.add('button-delete-completed-tasks', 'button-color');
    addTask.classList.add('add-task', 'flex');
    buttonAddNewTask.classList.add('button-add-new-task', 'button-color');
    inputTaskField.classList.add('input-task-field', 'button-line');
    this.container.classList.add('app', 'flex');


    buttonAddNewTask.innerHTML = '+';
    inputTaskField.type = 'text';
    inputTaskField.placeholder = 'Write here a new task';
    buttonDeleteCompletedTasks.innerHTML = 'Delete completed tasks';
    this.container.innerHTML = '';

    this.taskListContainer = taskList;
    this.addNewTaskContainer = addTask;
    this.container.appendChild(this.taskListContainer);
    this.container.appendChild(buttonDeleteCompletedTasks);
    this.container.appendChild(this.addNewTaskContainer);
    this.addNewTaskContainer.appendChild(inputTaskField);
    this.addNewTaskContainer.appendChild(buttonAddNewTask);
  }


  addToDo(task) {
    const item = document.createElement('li');
    const checkbox = document.createElement('input');

    item.textContent = task.text;
    item.classList.add('task-item', 'button-line', 'flex');

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
console.log(myToDo);
