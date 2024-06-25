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
        <li key={element.id}>
          <span>{element.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;