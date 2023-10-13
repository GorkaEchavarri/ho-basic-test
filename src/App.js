import React, { useState } from 'react';
import './App.css';
import DisplayTasks from './components/UI/DisplayTasks';
import NewTask from './components/UI/NewTask';
import Counter from './components/Counter';

//Initial Dummy tasks for displaying when app loaded
const initialTasks = [
  {id: 123, task: "Clean my room", done: true},
  {id: 236, task: "Make my bed", done: false},
  {id: 456, task: "Groceries", done: false},
  {id: 852, task: "Call doctor", done: false},
]

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState(initialTasks);

  //function that takes the task created in NewTask component and updates the hash
  function addTaskHandler(task) {
    setTasks((prevTasks) => [task, ...prevTasks]);
    setFilteredTasks((prevTasks) => [task, ...prevTasks]);
  };

  //
  function handleUpdateTaskList(updatedTasks) {
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  //To filter tasks and send then to DisplayTasks component
  function handleFilterChange(selectedType) {
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
        {/* Inside the counter we can also find the Filter component */}
        <Counter tasks={tasks} onFilterChange={handleFilterChange}/>
        <DisplayTasks tasks={filteredTasks} onUpdateTaskList={handleUpdateTaskList}/>
      </div>
    </div>
  );
}

export default App;
