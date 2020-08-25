import React from 'react';

const TaskListItem = ({
  task,
  taskActions,
}) => {
  const { id, text, done } = task;
  const classNames = `${done ? 'crossed' : ''} task-item-text`;
  const updateTask = () => taskActions.modifyById(id, { ...task, done: !done });

  return (
    <li className="flex task-item">
      <span className={classNames}>{text}</span>
      <div className="flex align-center task-item-actions">
        <input type="checkbox" defaultChecked={done} onClick={updateTask} />
        <button type="button" onClick={() => taskActions.removeById(id)}>
          <i className="gg-trash gg-scale gg-custom-color" />
        </button>
      </div>
    </li>
  );
};

export default TaskListItem;
