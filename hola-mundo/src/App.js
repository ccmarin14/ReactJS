import logo from './logo.svg';
import './App.css';
//import Greting from './components/pure/greting';
//import GretingFunc from './components/pure/gretingFunc';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente de ejemplo tipo clase */}        
        {/*<Greting name="Cristian"></Greting>*/}
        {/* Componente de ejemplo funcional */}
        {/*<GretingFunc name="Cristian"></GretingFunc>*/}
        {/* Componente de lista de tareas */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
