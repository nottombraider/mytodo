import React from 'react';

const TaskListItem = ({
  task,
  taskActions,
}) => {
  const { id, text, done } = task;
  const classNames = `${done ? 'crossed' : ''} task-text`;
  const updateTask = () => taskActions.modifyById(id, { ...task, done: !done });

  return (
    <li className="flex task-item">
      <span className={classNames}>{text}</span>
      <input type="checkbox" defaultChecked={done} onClick={updateTask} />
      <button type="button" className="button-delete" onClick={() => taskActions.removeById(id)}>
        <i className="gg-trash gg-scale gg-custom-color" />
      </button>
    </li>
  );
};

export default TaskListItem;
