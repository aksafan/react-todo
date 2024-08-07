import React from "react";
import InputWithLabel from "./InputWithLabel.jsx";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = React.useState("");

  const inputId = "todoTitle";

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    const todoTitleObject = {
      id: Date.now(),
      title: todoTitle,
    };

    onAddTodo(todoTitleObject);

    setTodoTitle(String());
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel inputId={inputId} handleTitleChange={handleTitleChange} todoTitle={todoTitle}>
        Title
      </InputWithLabel>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
