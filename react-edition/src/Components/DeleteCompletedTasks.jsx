import React from 'react';

const DeleteCompletedTasks = ({ hidden, deleteCompletedTasks }) => (
  <button type="button" className={hidden} onClick={deleteCompletedTasks}>Delete Completed Tasks</button>
);

export default DeleteCompletedTasks;
