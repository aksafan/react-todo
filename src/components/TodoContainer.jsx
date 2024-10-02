import {Fragment, useEffect, useState} from "react";
import AddTodoForm from "./AddTodoForm.jsx";
import TodoList from "./TodoList.jsx";
import {fetchData} from "../util/fetchData.js";
import {createData} from "../util/createData.js";
import {removeData} from "../util/removeData.js";
import {sortByFieldName} from "../util/sort.js";
import {parseSortArguments} from "../util/parser.js";

const TodoContainer = () => {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [titleError, setTitleError] = useState("")
    const [sort, setSort] = useState("title-asc")

    useEffect(() => {
        const getData = async function(isAsc, sortFieldName) {
            const data = await fetchData(isAsc, sortFieldName);
            console.log(data);
            data.records.sort((objectA, objectB) => {
                return sortByFieldName(isAsc, objectA.fields[sortFieldName], objectB.fields[sortFieldName]);
            });
            console.log(data.records)

            const todos = data.records.map((record) => {
                return {
                    id: record.id,
                    title: record.fields.title,
                    createdTime: record.createdTime
                }
            })
            console.log('todos', todos);

            setTodoList(todos);
            if (todos) {
                setIsLoading(false);
            }
        };
        const {fieldName, isAsc} = parseSortArguments(sort);

        getData(isAsc, fieldName);
    }, [])

    // To not query API for sorting
    // TODO: move this to API if pagination is a case
    useEffect(() => {
        const {fieldName, isAsc} = parseSortArguments(sort);
        const newTodoList = [...todoList].sort((objectA, objectB) => {
            return sortByFieldName(isAsc, objectA[fieldName], objectB[fieldName]);
        });
        setTodoList(newTodoList);
    }, [sort])

    useEffect(() => {
        const strinifiedTodoList = JSON.stringify(todoList);
        if (isLoading === false) {
            localStorage.setItem("savedTodoList", strinifiedTodoList);
        }
    }, [todoList]);

    const addTodo = async (newTodo) => {
        const {createdTodo, error} = await createData(newTodo.title)
        if (error) {
            setTitleError(error);
        } else {
            const newTodoList = [...todoList, createdTodo];
            const {fieldName, isAsc} = parseSortArguments(sort);
            newTodoList.sort((objectA, objectB) => {
                return sortByFieldName(isAsc, objectA[fieldName], objectB[fieldName]);
            });
            setTodoList(newTodoList);
        }
    };

    const removeTodo = async (id) => {
        const oldTodoList = [...todoList]
        setTodoList(todoList.filter((todo) => todo.id !== id));

        const isDeleted = await removeData(id, setTodoList, todoList);

        if (!isDeleted) {
            setTodoList(oldTodoList);
        }
    }

    const sortChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <>
            <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} titleError={titleError}/>
            <select onChange={sortChange} value={sort}>
                <option value="title-asc">Title a-z</option>
                <option value="title-desc">Title z-a</option>
                <option value="createdTime-asc">Created Time a-z</option>
                <option value="createdTime-desc">Created Time z-a</option>
            </select>
            <div className="todo-list">
                {isLoading ? <p>Loading...</p> :
                    <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
            </div>
        </>
    );
};

export default TodoContainer;
