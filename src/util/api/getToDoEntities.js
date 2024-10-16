import { createRequest } from '../http/request.js';

export const getToDoEntities = async (isAsc, sortFieldName) => {
    const queryParams = `?sort[0][field]=${sortFieldName}&sort[0][direction]=${isAsc ? 'asc' : 'desc'}`;
    const { url, options } = createRequest(queryParams, 'GET');

    // TODO: Extract processing response into separate methods
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Error status:', error);
    }
};
