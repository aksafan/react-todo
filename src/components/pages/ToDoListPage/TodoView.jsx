import AddTodoForm from '../../AddTodoForm.jsx';
import Select from '../../ui/Select/index.js';
import { sortingOptions } from '../../../util/sortingOprions.js';
import TodoList from '../../TodoList.jsx';
import PropTypes from 'prop-types';
import styles from './TodoView.module.css';

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
            <h1>Todo List from {tableName} table</h1>
            <div className={styles.form}>
                <AddTodoForm onAddTodo={onAddItem} titleError={titleError} />
                <Select className={styles.select} options={sortingOptions} onChange={onSortChange} value={sort} />
            </div>
            {isTodoListLoading ? <p>Loading...</p> :
                <TodoList todoList={todoList} onRemoveTodo={onRemoveItem} onUpdateTodo={onUpdateItem} />}
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