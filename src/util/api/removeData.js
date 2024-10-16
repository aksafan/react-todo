import { AUTHORIZATION, BASE_URL } from '../airTableConsts.js';

export const removeData = async (id) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: AUTHORIZATION,
        },
    };
    const url = `${BASE_URL}/${id}`;

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log('data', data);
        if (!response.ok) {
            throw new Error(response.status);
        }

        return data.deleted;
    } catch (error) {
        console.log('error status:', error);
    }
};
