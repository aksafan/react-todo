import {useEffect, useRef} from "react";
import style from './InputWithLabel.module.css'
import PropTypes from "prop-types";

export default function InputWithLabel({children, inputId, handleTitleChange, todoTitle}) {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <>
            <label className={style.Label}>{children}</label>
            <input
                className={style.Input}
                name="title"
                type="text"
                id={inputId}
                htmlFor={inputId}
                onChange={handleTitleChange}
                value={todoTitle}
                ref={inputRef}
            ></input>
        </>
    )
}

InputWithLabel.propTypes = {
    children: PropTypes.node.isRequired,
    inputId: PropTypes.string.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
    todoTitle: PropTypes.string.isRequired
}