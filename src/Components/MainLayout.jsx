import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { useLocalStorage } from './useLocalStorage';


const MainLayout = () => {
  const [tasks, taskActions] = useLocalStorage();


  return (
    <main className="main-layout">
      <AddTask addTask={taskActions.add} />
      <TaskList tasks={tasks} tasksActions={taskActions} />
    </main>
  );
};


export default MainLayout;
