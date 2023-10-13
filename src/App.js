import React, { useState } from 'react';
import './App.css';
import DisplayTasks from './components/UI/DisplayTasks';
import NewTask from './components/UI/NewTask';
import Counter from './components/Counter';


const initialTasks = [
  {id: 123, task: "Clean my room", done: true},
  {id: 236, task: "Make my bed", done: false},
  {id: 456, task: "Groceries", done: false},
  {id: 852, task: "Call doctor", done: false},

]

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState(initialTasks);



  const addTaskHandler = (task) => {
    setTasks((prevTasks) => [task, ...prevTasks]);
    setFilteredTasks((prevTasks) => [task, ...prevTasks]);
  };

  const handleUpdateTaskList = (updatedTasks) => {
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleFilterChange = (selectedType) => {
    if (selectedType === 'all') {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter((task) =>
        selectedType === 'done' ? task.done : !task.done
      );
      setFilteredTasks(filtered);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <div>
        <NewTask onSaveTaskData={addTaskHandler}/>
        <Counter tasks={tasks} onFilterChange={handleFilterChange}/>
        <DisplayTasks tasks={filteredTasks} onUpdateTaskList={handleUpdateTaskList}/>
      </div>
    </div>
  );
}

export default App;
