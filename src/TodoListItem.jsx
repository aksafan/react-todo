const TodoListItem = (props) => {
  const element = props.element;

  return (
    <li>
      <span>{element.title}</span>
    </li>
  );
};

export default TodoListItem;
