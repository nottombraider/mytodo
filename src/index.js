import { createTaskListItemMarkup } from './handlers';

// offline mode
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log('Service worker registered.', reg);
      });
  });
}

class App {
  constructor() {
    this.container = document.getElementById('app');
    this.taskList = [];
    this.localStorageKey = 'toDoTaskList';

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
        // eslint-disable-next-line no-alert
        alert('To Do cannot be empty');
      }
    });

    buttonDeleteCompletedTasks.addEventListener('click', () => {
      this.removeToDos();
    });

    this.buttonDeleteCompleted = buttonDeleteCompletedTasks;
    taskList.classList.add('task-list');
    buttonDeleteCompletedTasks.classList.add('button-delete-completed-tasks', 'button-color', 'hidden');
    addTask.classList.add('task-add', 'flex');
    buttonAddNewTask.classList.add('button-add-new-task', 'button-color');
    inputTaskField.classList.add('input-task-field', 'button-line');
    this.container.classList.add('app', 'flex');


    buttonAddNewTask.innerHTML = '+';
    inputTaskField.type = 'text';
    inputTaskField.placeholder = 'Write here a new task';
    buttonDeleteCompletedTasks.innerHTML = 'Delete completed tasks';
    this.container.innerHTML = '';

    this.taskListContainer = taskList;
    this.inputTaskField = inputTaskField;
    addTask.appendChild(this.inputTaskField);
    addTask.appendChild(buttonAddNewTask);
    this.container.appendChild(addTask);
    this.container.appendChild(this.taskListContainer);
    this.container.appendChild(buttonDeleteCompletedTasks);
    this.getTaskListFromLocalStorage();
    this.render();
  }

  saveTaskListToLocalStorage() {
    const taskListStr = JSON.stringify(this.taskList);
    localStorage.setItem('toDoTaskList', taskListStr);
  }

  getTaskListFromLocalStorage() {
    const dataFromLocalStorage = localStorage.getItem(this.localStorageKey);
    if (dataFromLocalStorage && dataFromLocalStorage.length) {
      this.taskList = JSON.parse(dataFromLocalStorage);
    }
  }

  addToDo(task) {
    this.taskList.push(task);
    this.render();
    this.saveTaskListToLocalStorage();
  }

  removeToDos() {
    this.taskList = this.taskList.filter((item) => !item.done);
    this.render();
    this.saveTaskListToLocalStorage();
  }

  render() {
    this.taskListContainer.innerHTML = '';
    if (this.taskList.length) {
      this.buttonDeleteCompleted.classList.remove('hidden');
    } else {
      this.buttonDeleteCompleted.classList.add('hidden');
    }
    this.taskList.forEach(createTaskListItemMarkup(this));
    this.inputTaskField.value = '';
  }
}

// eslint-disable-next-line no-new
new App();
