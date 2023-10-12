import './App.css';
import DisplayTasks from './components/UI/DisplayTasks';
import NewTask from './components/UI/NewTask';


const initial_tasks = [
  {id: 123, task: "Clean my room", done: true},
  {id: 236, task: "Make my bed", done: false},
  {id: 456, task: "Groceries", done: false},

]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <NewTask/>
        <DisplayTasks items={initial_tasks}/>
      </div>
    </div>
  );
}

export default App;
