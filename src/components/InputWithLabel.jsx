import { useEffect, useRef } from 'react';
import style from './InputWithLabel.module.css';
import PropTypes from 'prop-types';

const InputWithLabel = ({ children, inputId, handleTitleChange, todoTitle }) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <>
            <label className={style.label} htmlFor={inputId}>{children}</label>
            <input
                className={style.input}
                name="title"
                type="text"
                id={inputId}
                onChange={handleTitleChange}
                value={todoTitle}
                ref={inputRef}
            />
        </>
    );
};

InputWithLabel.propTypes = {
    children: PropTypes.node.isRequired,
    inputId: PropTypes.string.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
    todoTitle: PropTypes.string.isRequired,
};

export default InputWithLabel;
