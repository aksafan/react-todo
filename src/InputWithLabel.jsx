import React, {useEffect, useRef} from "react";

export default function InputWithLabel({children, inputId, handleTitleChange, todoTitle}) {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <>
            <label>{children}</label>
            <input
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