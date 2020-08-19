import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import DeleteCompletedTasks from './DeleteCompletedTasks';
import { useLocalStorage } from './useLocalStorage';

const MainLayout = () => {
  const [tasks, { setItem, updateItem, deleteCompletedItem }] = useLocalStorage();

  const addTask = (event) => {
    event.preventDefault();

    const {
      target: {
        elements: {
          inputTaskField,
        },
      },
    } = event;
    const text = inputTaskField.value;

    if (text.length) {
      const currentDateSec = (new Date()).valueOf();
      const task = {
        id: currentDateSec,
        text,
        done: false,
      };

      inputTaskField.value = '';

      setItem(task);
    }
  };

  return (
    <main className=" main-layout">
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} updateTaskStatus={updateItem} />
      <DeleteCompletedTasks
        hidden={(tasks.some((task) => task.done)) ? '' : 'hidden'}
        deleteCompletedTasks={deleteCompletedItem}
      />
    </main>
  );
};


export default MainLayout;
