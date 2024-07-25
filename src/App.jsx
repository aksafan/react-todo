import React from "react";
import AddTodoForm from "./AddTodoForm";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [todoList, setTodoList] = React.useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <>
      <h1>Todo List</h1>
      <div>
        <TodoList todoList={todoList} />
      </div>
      <AddTodoForm onAddTodo={addTodo} />
    </>
  );
}

export default App;
