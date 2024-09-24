import {AUTHORIZATION, BASE_URL} from "./airTableConsts.js";

export const removeData = async (id, setTodoList, todoList) => {
    const options = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            Authorization: AUTHORIZATION
        }
    };
    const url = `${BASE_URL}/${id}`;

    try {
        const response = await fetch(url, options)
        const data = await response.json();
        console.log('data', data);
        if (!response.ok) {
            throw new Error(response.status);
        }

        if (data.deleted) {
            setTodoList(todoList.filter((todo) => todo.id !== data.id));
        }
    } catch (error) {
        console.log('error status:', error);
    }
}
