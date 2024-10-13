import React from 'react';
import InputWithLabel from './InputWithLabel.jsx';
import styles from './AddTodoForm.module.css';
import PropTypes from 'prop-types';
import Button from './ui/Button/index.js';

const AddTodoForm = ({ onAddTodo, titleError }) => {
    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        setTodoTitle(event.target.value);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();

        const todoTitleObject = {
            title: todoTitle,
        };

        onAddTodo(todoTitleObject);
        setTodoTitle('');
    };

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                inputId="todoTitle"
                handleTitleChange={handleTitleChange}
                todoTitle={todoTitle}>
                Add
            </InputWithLabel>
            <Button type="submit" className={styles.button}>Save</Button>
            {titleError.length > 0 && <div className={styles.error}>{titleError}</div>}
        </form>
    );
};

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func,
    titleError: PropTypes.string,
};

export default AddTodoForm;
