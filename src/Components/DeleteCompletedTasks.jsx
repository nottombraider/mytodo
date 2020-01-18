import React from 'react';

const DeleteCompletedTasks = ({ hidden, deleteCompletedTasks }) => (
  <button type="button" className={hidden} onClick={deleteCompletedTasks}>
    <i className="gg-trash gg-scale gg-custom-color"></i>
  </button>
);

export default DeleteCompletedTasks;
