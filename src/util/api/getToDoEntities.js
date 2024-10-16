import { AUTHORIZATION, BASE_URL, TODO_TABLE } from '../airTableConsts.js';

export const getToDoEntities = async (isAsc, sortFieldName) => {
    const options = {
        method: 'GET',
        headers: {
            Authorization: AUTHORIZATION,
        },
    };

    // TODO: Extract building request and processing response into separate methods
    try {
        const url = `${BASE_URL}/${TODO_TABLE}?sort[0][field]=${sortFieldName}&sort[0][direction]=${isAsc ? 'asc' : 'desc'}`;
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();

        return data;
    } catch (error) {
        console.log('error', error.message);
    }
};
