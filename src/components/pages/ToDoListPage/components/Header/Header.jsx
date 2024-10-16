import React from 'react';
import Input from '../../../../ui/Input';
import styles from './Header.module.css';
import PropTypes from 'prop-types';
import Button from '../../../../ui/Button';
import Select from '../../../../ui/Select';
import { sortingOptions } from '../../../../../util/sorting/sortingOptions.js';

const Header = ({ onAddTodo, titleError, onSortChange, sort }) => {
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
        <div className={styles.root}>
            <form className={styles.form} onSubmit={handleAddTodo}>
                <Input
                    id="todoTitle"
                    onChange={handleTitleChange}
                    value={todoTitle}>
                    Add
                </Input>
                <Button type="submit">Save</Button>
                {titleError.length > 0 && <div className={styles.error}>{titleError}</div>}
            </form>
            <Select options={sortingOptions} onChange={onSortChange} value={sort} />
        </div>
    );
};

Header.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
    titleError: PropTypes.string,
    onSortChange: PropTypes.func.isRequired,
    sort: PropTypes.string.isRequired,
};

export default Header;
