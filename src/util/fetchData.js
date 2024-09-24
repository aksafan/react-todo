import {AUTHORIZATION, BASE_URL} from "./airTableConsts.js";

export const fetchData = async (setTodoList, setIsLoading) => {
    const options = {
        method: 'GET',
        headers: {
            Authorization: AUTHORIZATION,
        }
    };

    // TODO: Extract building request and processing response into separate methods
    try {
        const response = await fetch(BASE_URL, options)
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log('data', data);

        const todos = data.records.map((record) => {
            return {
                id: record.id,
                title: record.fields.title
            }
        })
        console.log('todos', todos);

        setTodoList(todos);
        setIsLoading(false);
    } catch (error) {
        console.log('error', error.message);
    }
}
