import {AUTHORIZATION, BASE_URL} from "./airTableConsts.js";

export const createData = async (title, setTitleError, setTodoList, todoList) => {
    const requestData = {
        "fields": {
            title: title
        }
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: AUTHORIZATION,
        },
        body: JSON.stringify(requestData),
    };

    try {
        const response = await fetch(BASE_URL, options)
        const data = await response.json();
        console.log('data', data);
        if (!response.ok) {
            if (response.status === 422) {
                setTitleError(data.error.message)
            }
            throw new Error(response.status);
        }

        const newTodo = {
            id: data.id,
            title: data.fields.title
        };

        setTodoList([...todoList, newTodo]);
    } catch (error) {
        console.log('error status:', error);
    }
}