import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import DeleteCompletedTasks from './DeleteCompletedTasks';

const LOCAL_STORAGE_KEY = 'toDoTaskList';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };

    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteCompletedTasks = this.deleteCompletedTasks.bind(this);
  }

  componentDidMount() {
    const dataFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (dataFromLocalStorage) {
      const tasks = JSON.parse(dataFromLocalStorage);

      this.setState({
        tasks,
      });
    }
  }

  componentDidUpdate() {
    const {
      state: {
        tasks,
      },
    } = this;
    const taskListStr = JSON.stringify(tasks);

    localStorage.setItem(LOCAL_STORAGE_KEY, taskListStr);
  }

  updateTaskStatus(id, status) {
    const {
      state: {
        tasks,
      },
    } = this;
    const task = tasks.find((task) => task.id === id);

    task.done = status;

    const filteredTasks = tasks.filter((task) => task.id !== id);

    filteredTasks.push(task);
    this.setState({
      tasks: filteredTasks,
    });
  }

  addTask(event) {
    event.preventDefault();
    const {
      state: {
        tasks,
      },
    } = this;
    const {
      target: {
        elements: {
          inputTaskField,
        },
      },
    } = event;
    const text = inputTaskField.value;

    if (text.length) {
      const task = {
        id: new Date(),
        text,
        done: false,
      };

      inputTaskField.value = '';
      const updatedTaskList = [...tasks, task];

      this.setState({
        tasks: updatedTaskList,
      });
    }
  }

  deleteCompletedTasks() {
    const {
      state: {
        tasks,
      },
    } = this;
    const undoneTasks = tasks.filter((task) => !task.done);

    this.setState({
      tasks: undoneTasks,
    });
  }

  render() {
    const {
      state: {
        tasks,
      },
      updateTaskStatus,
      addTask,
      deleteCompletedTasks,
    } = this;

    tasks.sort((taskA, taskB) => taskA.id - taskB.id);

    return (
      <main>
        <AddTask addTask={addTask} />
        <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} />
        <DeleteCompletedTasks tasks={tasks} deleteCompletedTasks={deleteCompletedTasks} />
      </main>
    );
  }
}

export default MainLayout;
