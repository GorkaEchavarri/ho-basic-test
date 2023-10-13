import React, { useState } from 'react';
import './App.css';
import DisplayTasks from './components/UI/DisplayTasks';
import NewTask from './components/UI/NewTask';


const initial_tasks = [
  {id: 123, task: "Clean my room", done: true},
  {id: 236, task: "Make my bed", done: false},
  {id: 456, task: "Groceries", done: false},

]

function App() {
  const [tasks, setTasks] = useState(initial_tasks);


  function addTaskHandler(task) {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  const handleUpdateTaskList = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <div>
        <NewTask onSaveTaskData={addTaskHandler}/>
        <DisplayTasks tasks={tasks} onUpdateTaskList={handleUpdateTaskList}/>
      </div>
    </div>
  );
}

export default App;
