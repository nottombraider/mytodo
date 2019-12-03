class App {
  constructor() {
    this.container = document.getElementById('app');
  }

  addToDo(task) {
    const item = document.createElement('li');
    const checkbox = document.createElement('input');

    item.textContent = task.text;
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;

    item.append(checkbox);
    this.container.append(item);
  }
}

const myToDo = new App();
myToDo.addToDo({
  text: 'buy bred',
  done: false,
});
console.log(myToDo);
