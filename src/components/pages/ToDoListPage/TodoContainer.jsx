import { useEffect, useState } from 'react';
import { fetchData } from '../../../util/api/fetchData.js';
import { createData } from '../../../util/api/createData.js';
import { removeData } from '../../../util/api/removeData.js';
import { sortByFieldName } from '../../../util/sorting/sort.js';
import { parseSortArguments } from '../../../util/sorting/sortingParser.js';
import PropTypes from 'prop-types';
import { updateData } from '../../../util/api/updateData.js';
import TodoView from './TodoView.jsx';
import { CREATED_TIME_DESC } from '../../../util/sorting/sortingOptions.js';

const TodoContainer = ({ tableName }) => {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [titleError, setTitleError] = useState('');
    const [sort, setSort] = useState(CREATED_TIME_DESC);

    useEffect(() => {
        const getData = async function() {
            const { fieldName, isAsc } = parseSortArguments(sort);
            const data = await fetchData(isAsc, fieldName);
            console.log(data);
            data.records.sort((objectA, objectB) => {
                return sortByFieldName(isAsc, objectA.fields[fieldName], objectB.fields[fieldName]);
            });
            console.log(data.records);

            const todos = data.records.map((record) => {
                return {
                    id: record.id,
                    title: record.fields.title,
                    isDone: record.fields.isDone,
                    createdTime: record.createdTime,
                };
            });
            console.log('todos', todos);

            setTodoList(todos);
            if (todos) {
                setIsLoading(false);
            }
        };


        getData();
    }, []);

    // To not query API for sorting
    // TODO: move this to API if pagination is a case
    useEffect(() => {
        const { fieldName, isAsc } = parseSortArguments(sort);
        const newTodoList = [...todoList].sort((objectA, objectB) => {
            return sortByFieldName(isAsc, objectA[fieldName], objectB[fieldName]);
        });
        setTodoList(newTodoList);
    }, [sort]);

    const addTodo = async (newTodo) => {
        const { createdTodo, error } = await createData(newTodo.title);
        if (error) {
            setTitleError(error);
        } else {
            const newTodoList = [...todoList, createdTodo];
            const { fieldName, isAsc } = parseSortArguments(sort);
            newTodoList.sort((objectA, objectB) => {
                return sortByFieldName(isAsc, objectA[fieldName], objectB[fieldName]);
            });
            setTodoList(newTodoList);
        }
    };

    const updateTodo = async (id, fieldsToUpdate) => {
        const { fieldName, isAsc } = parseSortArguments(sort);
        const newTodoList = todoList.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    ...fieldsToUpdate,
                };
            }

            return { ...todo };
        }).sort((objectA, objectB) => sortByFieldName(isAsc, objectA[fieldName], objectB[fieldName]));

        setTodoList(newTodoList);

        const { updatedTodo, error } = await updateData(id, fieldsToUpdate);
        if (error && !updatedTodo) {
            setTitleError(error);
        }
    };

    const removeTodo = async (id) => {
        const oldTodoList = [...todoList];
        setTodoList(todoList.filter((todo) => todo.id !== id));

        const isDeleted = await removeData(id, setTodoList, todoList);

        if (!isDeleted) {
            setTodoList(oldTodoList);
        }
    };

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <TodoView
            todoList={todoList}
            tableName={tableName}
            titleError={titleError}
            sort={sort}
            isTodoListLoading={isLoading}
            onSortChange={handleSortChange}
            onRemoveItem={removeTodo}
            onAddItem={addTodo}
            onUpdateItem={updateTodo}
        />
    );
};

TodoContainer.propTypes = {
    tableName: PropTypes.string,
};

export default TodoContainer;
