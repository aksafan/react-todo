import {Fragment, useEffect, useState} from "react";
import AddTodoForm from "./AddTodoForm.jsx";
import TodoList from "./TodoList.jsx";
import {fetchData} from "../util/fetchData.js";
import {createData} from "../util/createData.js";
import {removeData} from "../util/removeData.js";

const TodoContainer = () => {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [titleError, setTitleError] = useState("")

    useEffect(() => {
        fetchData(setTodoList, setIsLoading);
    }, [])

    useEffect(() => {
        const strinifiedTodoList = JSON.stringify(todoList);
        if (isLoading === false) {
            localStorage.setItem("savedTodoList", strinifiedTodoList);
        }
    }, [todoList]);

    const addTodo = (newTodo) => {
        createData(newTodo.title, setTitleError, setTodoList, todoList)
    };

    const removeTodo = (id) => {
        removeData(id, setTodoList, todoList)
    }

    return (
        <Fragment>
            <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} titleError={titleError}/>
            <div className="todo-list">
                {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
            </div>
        </Fragment>
    );
};

export default TodoContainer;
