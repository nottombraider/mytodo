import React, { useMemo } from 'react';
import TaskListItem from './TaskListItem';

const TaskList = ({ tasks, tasksActions }) => {
  const sortedTasks = useMemo(() => tasks.sort((a, b) => a.id - b.id), [tasks]);


  return (
    <ul className="task-item-list">
      {sortedTasks.map((task) => (
        <TaskListItem
          task={task}
          key={task.id}
          taskActions={tasksActions}
        />
      ))}
    </ul>
  );
};


export default TaskList;
