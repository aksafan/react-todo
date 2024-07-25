import React from "react";

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
      <label>Title</label>
      <input
        name="title"
        type="text"
        id={inputId}
        htmlFor={inputId}
        onChange={handleTitleChange}
        value={todoTitle}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
