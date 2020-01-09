import React from 'react';
import TaskList from './TaskList';

class App extends React.Component {
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

  render() {
    const {
      state: {
        tasks,
      },
      updateTaskStatus,
    } = this;

    tasks.sort((taskA, taskB) => taskA.id - taskB.id);
    return (
      <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} />
    );
  }
}

export default App;
