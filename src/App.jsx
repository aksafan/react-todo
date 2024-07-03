import React from "react";
import AddTodoForm from "./AddTodoForm";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [newTodo, setNewTodo] = React.useState();

  return (
    <>
      <h1>Todo List</h1>
      <div>
        <TodoList />
      </div>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
    </>
  );
}

export default App;
