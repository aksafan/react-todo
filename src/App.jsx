import {Fragment, useEffect, useState} from "react";
import AddTodoForm from "./AddTodoForm";
import "./App.css";
import TodoList from "./TodoList";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [titleError, setTitleError] = useState("")
    const baseUrl = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    const authorization = `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`

    const fetchData = async () => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: authorization
            }
        };

        // TODO: Extract building request and processing response into separate methods
        try {
            const response = await fetch(baseUrl, options)
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

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        const strinifiedTodoList = JSON.stringify(todoList);
        if (isLoading === false) {
            localStorage.setItem("savedTodoList", strinifiedTodoList);
        }
    }, [todoList]);

    const createData = async (title) => {
        const requestData = {
            "fields": {
                title: title
            }
        }
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: authorization
            },
            body: JSON.stringify(requestData),
        };

        try {
            const response = await fetch(baseUrl, options)
            const data = await response.json();
            console.log('data', data);
            if (!response.ok) {
                if (response.status === 422) {
                    setTitleError(data.error.message)
                }
                throw new Error(response.status);
            }

            const newTodo = {
                id: data.id,
                title: data.fields.title
            };

            setTodoList([...todoList, newTodo]);
        } catch (error) {
            console.log('error status:', error);
        }
    }

    const addTodo = (newTodo) => {
        createData(newTodo.title)
    };

    const removeData = async (id) => {
        const options = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Authorization: authorization
            }
        };
        const url = `${baseUrl}/${id}`;

        try {
            const response = await fetch(url, options)
            const data = await response.json();
            console.log('data', data);
            if (!response.ok) {
                throw new Error(response.status);
            }

            if (data.deleted) {
                setTodoList(todoList.filter((todo) => todo.id !== data.id));
            }
        } catch (error) {
            console.log('error status:', error);
        }
    }

    const removeTodo = (id) => {
        removeData(id)
    }

    return (
        <Fragment>
            <h1>Todo List</h1>
            <div>
                {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
            </div>
            <AddTodoForm onAddTodo={addTodo} titleError={titleError}/>
        </Fragment>
    );
}

export default App;
