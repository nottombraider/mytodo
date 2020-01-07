import React from "react";

function TaskListItem(props) {
    const {
        task: {id, text, done},
        toggleTaskStatus
    } = props;

    const clickHandlerCheckbox = () => toggleTaskStatus(id, !done);

    return (
        <div>
            <span className={done ? 'crossed' : ''}>{text}</span>
            <input type='checkbox' defaultChecked={done} onClick={clickHandlerCheckbox}/>
        </div>
    );
}

export default TaskListItem;
