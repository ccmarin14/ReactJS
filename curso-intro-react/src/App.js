import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/pure/TodoItem";
import { CreateTodoButtom } from "./components/CreateTodoButtom";

// import './App.css';

const todos = [
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo, index) =>(
          <TodoItem key={index} text={todo.text} />))
        }
      </TodoList>
      <CreateTodoButtom />
    </React.Fragment>
  );
}

export default App;

