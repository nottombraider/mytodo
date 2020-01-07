import React from 'react';
import TaskListItem from "./TaskListItem";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    id: 5,
                    text: 'call mom',
                    done: true
                },
                {
                    id: 7,
                    text: 'learn to code',
                    done: false
                },
                {
                    id: 10,
                    text: 'rest',
                    done: false
                }
            ]
        };

        this.updateTaskStatus = this.updateTaskStatus.bind(this);
    }

    updateTaskStatus(id, status) {
        const task = this.state.tasks.find( task => task.id === id);

        task.done = status;

        const filteredTasks = this.state.tasks.filter( task => task.id !== id );

        filteredTasks.push(task);
        this.setState({
            tasks: filteredTasks
        });
    }

    render() {
        this.state.tasks.sort( (taskA, taskB) => taskA.id - taskB.id );
        return (
            <ul>
                {this.state.tasks.map(task => <TaskListItem task={task} key={task.id} toggleTaskStatus={this.updateTaskStatus}/>)}
            </ul>
        )
    }
}

export default App;
