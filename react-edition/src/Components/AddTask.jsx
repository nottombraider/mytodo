import React from 'react';

const AddTask = ({ addTask }) => (
  <form className="flex wrap add-task-container" onSubmit={addTask}>
    <input
      type="text"
      placeholder="Enter your task here"
      name="inputTaskField"
      className="add-task-input-field"
    />
    <button type="submit"><i className="gg-add gg-scale gg-custom-color"> </i></button>
  </form>
);


export default AddTask;
