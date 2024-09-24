import style from './TodoListItem.module.css'

const TodoListItem = ({ element, onRemoveTodo }) => {
  return (
    <li className={style.ListItem}>
      <span>{element.title}</span>
      <button className={style.RemoveButton} type="button" onClick={() => onRemoveTodo(element.id)}>Remove</button>
    </li>
  );
};

export default TodoListItem;
