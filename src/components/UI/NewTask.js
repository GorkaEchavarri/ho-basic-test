import React, { useState } from 'react';
import classes from './NewTask.module.css';

function NewTask(props) {
  const [enteredTask, setEnteredTask] = useState('');


  function submitHandler(event) {
    event.preventDefault();

    const updatedEnteredTask = enteredTask.trim();

    if (updatedEnteredTask === '') {
      console.log("Please enter a valid task");
    } else {
      const taskData = {
        id: Math.random().toString(),
        task: updatedEnteredTask,
      };
      props.onSaveTaskData(taskData);
      setEnteredTask('');
    }
  };

  function taskChangeHandler(event) {
    setEnteredTask(event.target.value)
  };


  return (
    <React.Fragment>
            <div className={classes.form}>
                <form>
                    <input className={classes.input} value={enteredTask} onChange={taskChangeHandler}/>
                    <button className={classes["add-button"]} type='submit' onClick={submitHandler}>Add Task</button>
                </form>
            </div>
    </React.Fragment>
  )
};


export default NewTask;
