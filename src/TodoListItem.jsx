const TodoListItem = ({ element, onRemoveTodo }) => {
  return (
    <li>
      <span>{element.title}</span>
      <button type="button" onClick={() => onRemoveTodo(element.id)}>Remove</button>
    </li>
  );
};

export default TodoListItem;
