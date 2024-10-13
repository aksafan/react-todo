import TodoListItem from "./TodoListItem.jsx";
import PropTypes from "prop-types";
import style from "./TodoList.module.css";

const TodoList = ({todoList, onRemoveTodo}) => {
    return (
        <ul className={style.list}>
            {todoList.map((element) => (
                <TodoListItem key={element.id} element={element} onRemoveTodo={onRemoveTodo}/>
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        createdTime: PropTypes.string.isRequired
    })).isRequired,
    onRemoveTodo: PropTypes.func
}

export default TodoList;
