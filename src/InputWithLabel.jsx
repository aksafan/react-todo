import {useEffect, useRef} from "react";
import style from './InputWithLabel.module.css'

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