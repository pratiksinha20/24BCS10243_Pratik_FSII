import { useState } from "react";

function App() {
  // Stores input text
  const [text, setText] = useState("");

  // Stores all todos
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = () => {
    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);

    // Clear input
    setText("");
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  // Mark Todo as completed / uncompleted
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      {/* Input Section */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />

        <button onClick={addTodo}>Add</button>
      </div>

      {/* Todo List */}
      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="empty"></p>
        ) : (
          todos.map((todo) => (
            <div className="todo" key={todo.id}>
              <span
                onClick={() => toggleTodo(todo.id)}
                className={todo.completed ? "completed" : ""}
              >
                {todo.text}
              </span>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;