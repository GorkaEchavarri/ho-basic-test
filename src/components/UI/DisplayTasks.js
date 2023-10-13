import React from 'react';
import classes from './DisplayTasks.module.css';

function DisplayTasks(props) {
  return (
    <div className={classes.list}>
      <ul>
        {props.tasks.map(task => (
          <li key={task.id}>
            {task.task} - {task.done && "X"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayTasks;
