import { useState } from "react";
import TodoList from "./TodoList.jsx";
// Step 3: create AddTodoForm.jsx, then import and use it below.
// import AddTodoForm from "./AddTodoForm.jsx";
import AddTodoForm from "./AddTodoForm.jsx";

const INITIAL_TODOS = [
  { id: 1, text: "Read the lab README", done: true },
  { id: 2, text: "Build the to-do list", done: false },
  { id: 3, text: "Add one of your own", done: false },
];

export default function App() {
  // Right now the list is STATIC. Your job is to make it live.
  //
  // Step 1: hold the todos in state instead of a constant:
  //   const [todos, setTodos] = useState(INITIAL_TODOS)
  // const todos = INITIAL_TODOS;
  const [todos, setTodos] = useState(INITIAL_TODOS);

  // Step 2: write these handlers. They must NOT mutate state - build a NEW
  // array each time (spread / map / filter) and pass it to setTodos:
  //   addTodo(text)   → append { id, text, done: false }  (give it a fresh id)
  //   toggleTodo(id)  → flip `done` on the matching todo
  //   deleteTodo(id)  → drop the matching todo
  // Then pass them as props to the components below.
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
      {/* Step 3: <AddTodoForm onAdd={addTodo} /> */}
      <AddTodoForm onAdd={addTodo} />

      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo}/>
      
      {/* Step 4: a derived count - "{done} of {total} done" computed from todos */}
      <p>{done} of {total} done</p>
    </main>
  );
}
