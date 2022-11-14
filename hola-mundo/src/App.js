import logo from './logo.svg';
import './App.css';
//import Greting from './components/pure/greting';
//import GretingFunc from './components/pure/gretingFunc';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
//import Ejemplo1 from './hooks/Ejemplo1';
//import Ejemplo2 from './hooks/Ejemplo2';
//import MiComponenteConContexto from './hooks/Ejemplo3';
//import Ejemplo4 from './hooks/Ejemplo4';


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
        {/*<TaskListComponent></TaskListComponent>*/}
        {/*Ejemplos de uso de HOOKS*/}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
        {/*<Ejemplo4 nombre='Cristian'>
          <h3>Contenido del props.children</h3>
        </Ejemplo4>*/}
        <GreetingStyled name='Cristian'></GreetingStyled>
      </header>
    </div>
  );
}

export default App;
