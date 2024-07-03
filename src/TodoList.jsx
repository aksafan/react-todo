import TodoListItem from "./TodoListItem";

const todoList = [
  { id: 1, title: "Complete assignment1" },
  { id: 2, title: "Complete assignment2" },
  { id: 3, title: "Complete assignment3" },
  { id: 4, title: "Complete assignment4" },
  { id: 5, title: "Complete assignment5" },
];

const TodoList = () => {
  return (
    <ul>
      {todoList.map((element) => (
        <TodoListItem key={element.id} element={element} />
      ))}
    </ul>
  );
};

export default TodoList;
