const AddTodoForm = () => {
  const inputId = "todoTitle";

  return (
    <form>
      <label>Title</label>
      <input type="text" id={inputId} htmlFor={inputId}></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
