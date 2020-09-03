import React from 'react';

const AddTask = ({ addTask }) => {
  const handleAddTask = (event) => {
    event.preventDefault();

    const {
      target: {
        elements: {
          inputTaskField,
        },
      },
    } = event;
    const text = inputTaskField.value;

    if (text.length) {
      const currentDateSec = (new Date()).valueOf();
      const task = {
        id: currentDateSec,
        text,
        done: false,
      };

      inputTaskField.value = '';

      addTask(task);
    }
  };

  return (
    <div className="flex center add-task-container">
      <form className="flex add-task-form" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter your task here"
          name="inputTaskField"
          className="add-task-input-field"
        />
        <button type="submit"><i className="gg-add gg-scale gg-custom-color"> </i></button>
      </form>
    </div>

  );
};


export default AddTask;
