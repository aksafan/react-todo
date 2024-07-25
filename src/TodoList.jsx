import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((element) => (
        <TodoListItem key={element.id} element={element} />
      ))}
    </ul>
  );
};

export default TodoList;
