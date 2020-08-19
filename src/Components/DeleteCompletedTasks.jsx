import React from 'react';

const DeleteCompletedTasks = ({ hidden, deleteCompletedTasks }) => (
  <button type="button" className={`${hidden} button-delete`} onClick={deleteCompletedTasks}>
    <i className="gg-trash gg-scale gg-custom-color" />
  </button>
);

export default DeleteCompletedTasks;
