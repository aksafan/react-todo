import style from './TodoListItem.module.css'
import PropTypes from "prop-types";

const TodoListItem = ({ element, onRemoveTodo }) => {
  return (
    <li className={style.ListItem}>
      <span>{element.title}</span>
      <span>{element.createdTime}</span>
      <button className={style.RemoveButton} type="button" onClick={() => onRemoveTodo(element.id)}>Remove</button>
    </li>
  );
};

TodoListItem.propTypes = {
    element: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    onRemoveTodo: PropTypes.func,
}

export default TodoListItem;
