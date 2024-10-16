import { AUTHORIZATION, BASE_URL } from '../airTableConsts.js';

export const fetchData = async (isAsc, sortFieldName) => {
    const options = {
        method: 'GET',
        headers: {
            Authorization: AUTHORIZATION,
        },
    };

    // TODO: Extract building request and processing response into separate methods
    try {
        const url = `${BASE_URL}?sort[0][field]=${sortFieldName}&sort[0][direction]=${isAsc ? 'asc' : 'desc'}`;
        console.log(url);
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
