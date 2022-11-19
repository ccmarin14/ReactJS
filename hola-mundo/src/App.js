import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
//import Greting from './components/pure/greting';
//import GretingFunc from './components/pure/gretingFunc';
// import GreetingStyled from './components/pure/greetingStyled';
//import Ejemplo1 from './hooks/Ejemplo1';
//import Ejemplo2 from './hooks/Ejemplo2';
//import MiComponenteConContexto from './hooks/Ejemplo3';
//import Ejemplo4 from './hooks/Ejemplo4';
//import Father from './components/container/father';


function App() {
  return (
    <div className="App">
        {/* Componente de ejemplo tipo clase */}        
        {/*<Greting name="Cristian"></Greting>*/}
        {/* Componente de ejemplo funcional */}
        {/*<GretingFunc name="Cristian"></GretingFunc>*/}
        {/* Componente de lista de tareas */}
        {/*Ejemplos de uso de HOOKS*/}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
        {/*<Ejemplo4 nombre='Cristian'>
          <h3>Contenido del props.children</h3>
        </Ejemplo4>*/}
        {/*<GreetingStyled name='Cristian'></GreetingStyled>*/}
        {/* Gestión de eventos */}
        {/*<Father></Father>*/}
        {/* Proyecto Final */}
        <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
