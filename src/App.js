import './App.css';
import { TaskProvider } from './context/TaskContex';
import TaskList from './components/task-list/TaskList';
import Header from './components/header/Header';

function App() {
  return (
    <TaskProvider>
      <Header/>
      <TaskList/>
    </TaskProvider>
  );
}

export default App;
