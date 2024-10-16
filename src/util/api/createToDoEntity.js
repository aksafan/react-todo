import { AUTHORIZATION, BASE_URL, TODO_TABLE } from '../airTableConsts.js';

export const createToDoEntity = async (title) => {
    const requestData = {
        'fields': {
            title: title,
            isDone: 'FALSE',
        },
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: AUTHORIZATION,
        },
        body: JSON.stringify(requestData),
    };

    try {
        const response = await fetch(`${BASE_URL}/${TODO_TABLE}`, options);
        const data = await response.json();
        if (!response.ok) {
            if (response.status === 422) {
                return { newTodo: null, error: data.error.message };
            }

            throw new Error(response.status);
        }

        const newTodo = {
            id: data.id,
            title: data.fields.title,
            isDone: data.fields.isDone,
            createdTime: data.createdTime,
        };

        return { createdTodo: newTodo, error: null };
    } catch (error) {
        console.log('error status:', error);
    }
};