import { AUTHORIZATION, BASE_URL, TODO_TABLE } from '../airTableConsts.js';

export const deleteToDoEntity = async (id) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: AUTHORIZATION,
        },
    };
    const url = `${BASE_URL}/${TODO_TABLE}/${id}`;

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(response.status);
        }

        return data.deleted;
    } catch (error) {
        console.log('error status:', error);
    }
};
