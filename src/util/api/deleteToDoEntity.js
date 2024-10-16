import { createRequest } from '../http/request.js';

export const deleteToDoEntity = async (id) => {
    const { url, options } = createRequest(`/${id}`, 'DELETE');

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(response.status);
        }

        return data.deleted;
    } catch (error) {
        console.log('Error status:', error);
    }
};
