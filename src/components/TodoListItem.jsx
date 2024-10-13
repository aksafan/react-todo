import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';
import Button from './ui/Button';
import classNames from 'classnames';
import { useState } from 'react';
import { format } from 'date-fns';

const TodoListItem = ({ element, onRemoveTodo, onUpdateTodo }) => {
    const [isDone, setIsDone] = useState(element.isDone === 'TRUE');

    const handleChange = () => {
        setIsDone(!isDone);
        onUpdateTodo(element.id, { isDone: isDone ? 'FALSE' : 'TRUE' });
    };

    return (
        <li className={classNames(styles.listItem, {
            [styles.listItemDone]: isDone,
        })}>
            <div className={styles.main}>
                <div className={classNames({ [styles.isDone]: isDone })}>
                    <input type="checkbox" checked={isDone} onChange={handleChange} className={styles.checkbox} />
                    {element.title}
                </div>
                <div className={styles.date}>{format(new Date(element.createdTime), 'hh:mm aaa, MM/dd/yyyy')}</div>
            </div>
            <Button className={styles.removeButton} onClick={() => onRemoveTodo(element.id)}>
                Remove
            </Button>
        </li>
    );
};

TodoListItem.propTypes = {
    element: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    onRemoveTodo: PropTypes.func,
    onUpdateTodo: PropTypes.func,
};

export default TodoListItem;
