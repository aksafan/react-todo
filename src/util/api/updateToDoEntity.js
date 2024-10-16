import { AUTHORIZATION, BASE_URL, TODO_TABLE } from '../airTableConsts.js';

export const updateToDoEntity = async (id, fieldsToUpdate) => {
    const requestData = {
        'fields': {
            ...fieldsToUpdate,
        },
    };
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: AUTHORIZATION,
        },
        body: JSON.stringify(requestData),
    };

    const url = `${BASE_URL}/${TODO_TABLE}/${id}`;

    try {
        const response = await fetch(url, options);
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

        return { updatedTodo: newTodo, error: null };
    } catch (error) {
        console.log('error status:', error);
    }
};