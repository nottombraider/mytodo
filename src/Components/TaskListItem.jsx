import React from 'react';

function TaskListItem(props) {
  const {
    task: { id, text, done },
    toggleTaskStatus,
  } = props;

  const clickHandlerCheckbox = () => toggleTaskStatus(id, !done);

  return (
    <li className="flex task-item">
      <span className="{done ? 'crossed' : ''}, task-text">{text}</span>
      <input type="checkbox" defaultChecked={done} onClick={clickHandlerCheckbox} />
    </li>
  );
}

export default TaskListItem;
