import React from 'react';
import classes from './DisplayTasks.module.css';

function DisplayTasks(props) {
  const handleCheckboxChange = (taskId) => {
    const updatedTasks = props.tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    props.onUpdateTaskList(updatedTasks);
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = props.tasks.filter((task) => task.id !== taskId);
    props.onUpdateTaskList(updatedTasks);
  };


  return (
    <div className={classes.list}>
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>
            {task.task}
            <input type="checkbox" checked={task.done}
              onChange={() => handleCheckboxChange(task.id)}/>
            <button className={classes.deletebtn} onClick={() => handleRemoveTask(task.id)}> 🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayTasks;
