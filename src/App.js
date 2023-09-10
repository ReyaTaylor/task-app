import { useState } from 'react'
import Header from "./Components/Header.js";
import Tasks from "./Components/Tasks.js";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Food shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false, 
    }
])

// Delete Task

function deleteTask(id) {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
function toggleReminder(id) {
  setTasks(
    tasks.map(
      (task) => 
      task.id === id ? 
      {...task, reminder: !tasks.reminder} 
      : task)
      )
}

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
      : 'No Tasks'}
    </div>
  );
}

export default App;