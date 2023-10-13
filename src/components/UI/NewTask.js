import React, { useState } from 'react';
import classes from './NewTask.module.css';

function NewTask(props) {
  const [enteredTask, setEnteredTask] = useState('');

  function submitHandler(event) {
    event.preventDefault();

    const updatedEnteredTask = enteredTask.trim();

    //In case an invalid task is entered:
    if (updatedEnteredTask === '') {
      console.log("Please enter a valid task");
    } else {
      const taskData = {
        id: Math.random().toString(),
        task: updatedEnteredTask,
        done: false,
      };
      props.onSaveTaskData(taskData);
      setEnteredTask('');
    }
  };

  function taskChangeHandler(event) {
    setEnteredTask(event.target.value)
  };


  return (
    <div className={classes.form}>
        <form>
            <input className={classes.input} value={enteredTask} onChange={taskChangeHandler}/>
            <button className={classes["add-button"]} type='submit' onClick={submitHandler}>Add Task</button>
        </form>
    </div>
  )
};


export default NewTask;
