import React from "react";
import InputWithLabel from "./InputWithLabel.jsx";
import style from './InputWithLabel.module.css'

const AddTodoForm = ({ onAddTodo, titleError }) => {
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
    <form className={style.Form} onSubmit={handleAddTodo}>
      <InputWithLabel inputId={inputId} handleTitleChange={handleTitleChange} todoTitle={todoTitle}>
        Add new item
      </InputWithLabel>
      <button className={style.Button} type="submit">Save</button>
      {titleError.length > 0 && <div className={"error-message"}>{titleError}</div>}
    </form>
  );
};

export default AddTodoForm;
