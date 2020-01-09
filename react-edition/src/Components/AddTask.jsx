import React from 'react';

const AddTask = ({ addTask }) => (
  <form className="button-add-task" onSubmit={addTask}>
    <input
      type="text"
      placeholder="Enter your task here"
      name="inputTaskField"
    />
    <button>Add</button>
  </form>
);


export default AddTask;
