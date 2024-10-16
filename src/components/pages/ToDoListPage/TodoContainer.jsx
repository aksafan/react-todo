import { useEffect, useState } from 'react';
import { getToDoEntities } from '../../../util/api/getToDoEntities.js';
import { createToDoEntity } from '../../../util/api/createToDoEntity.js';
import { deleteToDoEntity } from '../../../util/api/deleteToDoEntity.js';
import { sortByFieldName } from '../../../util/sorting/sort.js';
import { parseSortArguments } from '../../../util/sorting/sortingParser.js';
import PropTypes from 'prop-types';
import { updateToDoEntity } from '../../../util/api/updateToDoEntity.js';
import TodoView from './TodoView.jsx';
import { CREATED_TIME_DESC } from '../../../util/sorting/sortingOptions.js';

const TodoContainer = ({ tableName }) => {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [titleError, setTitleError] = useState('');
    const [sort, setSort] = useState(CREATED_TIME_DESC);

    useToDoListPreparation(sort, setTodoList, setIsLoading);

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
        const { createdTodo, error } = await createToDoEntity(newTodo.title);
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

        const { updatedTodo, error } = await updateToDoEntity(id, fieldsToUpdate);
        if (error && !updatedTodo) {
            setTitleError(error);
        }
    };

    const removeTodo = async (id) => {
        const oldTodoList = [...todoList];
        setTodoList(todoList.filter((todo) => todo.id !== id));

        const isDeleted = await deleteToDoEntity(id, setTodoList, todoList);

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

const useToDoListPreparation = (sort, setTodoList, setIsLoading) => {
    useEffect(() => {
        const prepareTodoList = async function() {
            const { fieldName, isAsc } = parseSortArguments(sort);
            const data = await getToDoEntities(isAsc, fieldName);
            data.records.sort((objectA, objectB) => {
                return sortByFieldName(isAsc, objectA.fields[fieldName], objectB.fields[fieldName]);
            });
            loadToDoList(data);
        };

        const loadToDoList = (data) => {
            const todos = data.records.map((record) => {
                return {
                    id: record.id,
                    title: record.fields.title,
                    isDone: record.fields.isDone,
                    createdTime: record.createdTime,
                };
            });

            setTodoList(todos);
            if (todos) {
                setIsLoading(false);
            }
        };

        prepareTodoList();
    }, []);
};

export default TodoContainer;
