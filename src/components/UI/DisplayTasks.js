import React from 'react';
import classes from './DisplayTasks.module.css';

function DisplayTasks(props) {
  console.log("Working component");
  return (
    <div className={classes.list}>
      <ul>
        {props.items.map(item => (
          <li key={item.id}>
            {item.task} - {!item.done && "X"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayTasks;
