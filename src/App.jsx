import {Fragment, useEffect, useState} from "react";
import AddTodoForm from "./AddTodoForm";
import "./App.css";
import TodoList from "./TodoList";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const result = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(JSON.parse(localStorage.getItem("savedTodoList") || "[]"));
            }, 2000)
        });
        result.then((result) => {
            setTodoList(result);
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        const strinifiedTodoList = JSON.stringify(todoList);
        if (isLoading === false) {
            localStorage.setItem("savedTodoList", strinifiedTodoList);
        }
    }, [todoList]);

    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo]);
    };

    const removeTodo = (id) => {
        setTodoList(todoList.filter((todo) => todo.id !== id));
    }

    return (
        <Fragment>
            <h1>Todo List</h1>
            <div>
                {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
            </div>
            <AddTodoForm onAddTodo={addTodo}/>
        </Fragment>
    );
}

export default App;
