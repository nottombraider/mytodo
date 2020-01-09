import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 5,
          text: 'call mom',
          done: true,
        },
        {
          id: 7,
          text: 'learn to code',
          done: false,
        },
        {
          id: 10,
          text: 'rest',
          done: false,
        },
        {
          id: 1,
          text: 'do it',
          done: false,
        },
      ],
    };

    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.addTask = this.addTask.bind(this);
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

  render() {
    const {
      state: {
        tasks,
      },
      updateTaskStatus,
      addTask,
    } = this;

    tasks.sort((taskA, taskB) => taskA.id - taskB.id);

    return (
      <main>
        <AddTask addTask={addTask} />
        <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} />
      </main>
    );
  }
}

export default MainLayout;
