import React from 'react';
import TaskListItem from './TaskListItem';

const TaskList = ({ tasks, updateTaskStatus }) => (
  <ul>
    {tasks.map((task) => (
      <TaskListItem
        task={task}
        key={task.id}
        toggleTaskStatus={updateTaskStatus}
      />
    ))}
  </ul>
);


export default TaskList;
