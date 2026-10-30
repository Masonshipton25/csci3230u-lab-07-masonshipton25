import { useState } from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";

const INITIAL_TODOS = [
  { id: 1, text: "Read the lab README", done: true },
  { id: 2, text: "Build the to-do list", done: false },
  { id: 3, text: "Add one of your own", done: false },
];

export default function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  function addTodo(text) {
    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
      done: false
    };

    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    const toggledTodos = todos.map(t => t.id === id ? { ...t, done: !t.done } : t);
    setTodos(toggledTodos);
  }

  function deleteTodo(id) {
    const keptTodos = todos.filter(t => t.id !== id);
    setTodos(keptTodos);
  }

  const done = todos.filter(t => t.done).length;
  const total = todos.length;

  return (
    <main className="app">
      <h1>My To-Dos</h1>
      <AddTodoForm onAdd={addTodo} />

      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo}/>
      
      <p>{done} of {total} done</p>
    </main>
  );
}
