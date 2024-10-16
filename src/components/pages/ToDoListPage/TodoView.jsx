import TodoList from '../../ToDoList/ToDoList';
import PropTypes from 'prop-types';
import styles from './TodoView.module.css';
import Loader from '../../ui/Loader';
import { EmptyState, Header } from './components';

const TodoView = ({
                      tableName,
                      onAddItem,
                      titleError,
                      todoList,
                      onSortChange,
                      sort,
                      isTodoListLoading,
                      onRemoveItem,
                      onUpdateItem,
                  }) => {
    return (
        <>
            <h1 className={styles.title}>Todo List from {tableName} table</h1>
            <Header onAddTodo={onAddItem} titleError={titleError} onSortChange={onSortChange} sort={sort} />
            {isTodoListLoading ? <Loader className={styles.loader} /> : todoList.length > 0 ?
                <TodoList todoList={todoList} onRemoveTodo={onRemoveItem} onUpdateTodo={onUpdateItem} /> :
                <EmptyState />}
        </>
    );
};

TodoView.propTypes = {
    tableName: PropTypes.string.isRequired,
    onAddItem: PropTypes.func.isRequired,
    titleError: PropTypes.string.isRequired,
    todoList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        isDone: PropTypes.string.isRequired,
        createdTime: PropTypes.string.isRequired,
    })).isRequired,
    onSortChange: PropTypes.func.isRequired,
    sort: PropTypes.string.isRequired,
    isTodoListLoading: PropTypes.bool.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    onUpdateItem: PropTypes.func.isRequired,
};

export default TodoView;
