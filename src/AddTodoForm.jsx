const AddTodoForm = (props) => {
  const inputId = "todoTitle";

  const handleAddTodo = (event) => {
    event.preventDefault();

    const todoTitle = event.target.querySelector("input").value;
    console.log("todoTitle: ", todoTitle);

    event.target.reset();

    props.onAddTodo(todoTitle);
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label>Title</label>
      <input name="title" type="text" id={inputId} htmlFor={inputId}></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
