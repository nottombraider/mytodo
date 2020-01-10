import React from 'react';

const DeleteCompletedTasks = ({ tasks, deleteCompletedTasks }) => {
  if (tasks.some((task) => task.done)) {
    return <button type="button" onClick={deleteCompletedTasks}>Delete Completed Tasks</button>;
  }

  return <></>;
};

export default DeleteCompletedTasks;
