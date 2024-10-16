import { ListItem } from './components';
import PropTypes from 'prop-types';
import style from './ToDoList.module.css';

const ToDoList = ({ todoList, onRemoveTodo, onUpdateTodo }) => (
    <ul className={style.list}>
        {todoList.map((element) => (
            <ListItem
                key={element.id}
                element={element}
                onRemoveTodo={onRemoveTodo}
                onUpdateTodo={onUpdateTodo} />
        ))}
    </ul>
);

ToDoList.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        isDone: PropTypes.string.isRequired,
        createdTime: PropTypes.string.isRequired,
    })).isRequired,
    onRemoveTodo: PropTypes.func,
    onUpdateTodo: PropTypes.func,
};

export default ToDoList;
