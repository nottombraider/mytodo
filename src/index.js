const createTaskListItemMarkup = (task) => {
  const itemContainer = document.createElement('li');
  const itemTextBox = document.createElement('input');
  const checkbox = document.createElement('input');

  itemContainer.classList.add('task-item', 'button-line', 'flex');
  itemTextBox.classList.add('input-task-field');

  itemTextBox.value = task.text;
  checkbox.type = 'checkbox';
  checkbox.classList.add('task-item-checkbox');
  checkbox.checked = task.done;

  checkbox.addEventListener('change', (event) => {
    const index = this.taskList.indexOf(task);
    const activeTask = this.taskList[index];

    activeTask.done = event.target.checked;
  });
  itemTextBox.addEventListener('input', (event) => {
    // eslint-disable-next-line no-param-reassign
    task.text += event.data;
  });

  itemContainer.append(itemTextBox);
  itemContainer.append(checkbox);
  this.taskListContainer.append(itemContainer);
};

class App {
  constructor() {
    this.container = document.getElementById('app');
    this.taskList = [];

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
    });

    buttonDeleteCompletedTasks.addEventListener('click', () => {
      this.removeToDos();
    });

    this.buttonDeleteCompleted = buttonDeleteCompletedTasks;
    taskList.classList.add('task-list');
    buttonDeleteCompletedTasks.classList.add('button-delete-completed-tasks', 'button-color', 'hidden');
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
    this.inputTaskField = inputTaskField;
    addTask.appendChild(this.inputTaskField);
    addTask.appendChild(buttonAddNewTask);
    this.container.appendChild(addTask);
    this.container.appendChild(this.taskListContainer);
    this.container.appendChild(buttonDeleteCompletedTasks);
  }


  addToDo(task) {
    this.taskList.push(task);
    this.render();
  }

  removeToDos() {
    this.taskList = this.taskList.filter((item) => !item.done);
    this.render();
  }

  render() {
    this.taskListContainer.innerHTML = '';
    if (this.taskList.length) {
      this.buttonDeleteCompleted.classList.remove('hidden');
    } else {
      this.buttonDeleteCompleted.classList.add('hidden');
    }
    this.taskList.forEach(createTaskListItemMarkup);
    this.inputTaskField.value = '';
  }
}

const myToDo = new App();
console.log(myToDo);
