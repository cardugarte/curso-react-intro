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
  return (
    <>
  <div className="container">
      <TodoCounter total={10} completed={16} />
      <TodoSearch />
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
