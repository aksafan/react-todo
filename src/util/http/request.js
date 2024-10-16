import { AUTHORIZATION, BASE_URL, TODO_TABLE } from '../airTableConsts.js';

export const createRequest = (queryParams, method, requestData) => {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: AUTHORIZATION,
        },
        body: JSON.stringify(requestData),
    };

    const url = `${BASE_URL}/${TODO_TABLE}${queryParams}`;

    return {
        url: url,
        options: options
    };
};
