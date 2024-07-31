import React from "react";
import AddTodoForm from "./AddTodoForm";
import "./App.css";
import TodoList from "./TodoList";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem("savedTodoList") || "[]")
  );

  React.useEffect(() => {
    const strinifiedTodoList = JSON.stringify(todoList);
    localStorage.setItem("savedTodoList", strinifiedTodoList);
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <React.Fragment>
      <h1>Todo List</h1>
      <div>
        <TodoList todoList={todoList} />
      </div>
      <AddTodoForm onAddTodo={addTodo} />
    </React.Fragment>
  );
}

export default App;
