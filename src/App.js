import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import "./App.css";

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Curso de React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
]

function App() {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('usuarios buscan ToDo de: ' + searchValue)
  return (
    <>
  <div className="container">
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <CreateTodoButton texto={'Crear nuevo TODO'} />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} completed={todo.completed} text={todo.text} />
        ))}
      </TodoList>
  </div>
    </>
  );
}



export default App;
