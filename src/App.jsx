import AddTodoForm from "./AddTodoForm";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <div>
        <TodoList />
      </div>
      <AddTodoForm />
    </>
  );
}

export default App;
