export const createTaskListItemMarkup = (context) => (task) => {
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
    const index = context.taskList.indexOf(task);
    const activeTask = context.taskList[index];

    activeTask.done = event.target.checked;
  });
  itemTextBox.addEventListener('input', (event) => {
    // eslint-disable-next-line no-param-reassign
    task.text += event.data;
  });

  itemContainer.append(itemTextBox);
  itemContainer.append(checkbox);
  context.taskListContainer.append(itemContainer);
};
