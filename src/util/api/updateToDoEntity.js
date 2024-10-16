import { createRequest } from '../http/request.js';

export const updateToDoEntity = async (id, fieldsToUpdate) => {
    const requestData = {
        'fields': {
            ...fieldsToUpdate,
        },
    };
    const { url, options } = createRequest(`/${id}`, 'PATCH', requestData);

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
        console.log('Error status:', error);
    }
};