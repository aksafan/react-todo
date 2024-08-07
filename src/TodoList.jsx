import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <ul>
      {todoList.map((element) => (
        <TodoListItem key={element.id} element={element} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
