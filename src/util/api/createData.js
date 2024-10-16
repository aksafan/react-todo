import { AUTHORIZATION, BASE_URL } from '../airTableConsts.js';

export const createData = async (title) => {
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
        const response = await fetch(BASE_URL, options);
        const data = await response.json();
        console.log('data', data);
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