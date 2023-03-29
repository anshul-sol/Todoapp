import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  }

  function handleTodoDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <h1 className="flex flex-row justify-center text-2xl md:text-md">
        Todo App
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-row justify-center mt-3"
      >
        <input
          type="text"
          placeholder="Enter a todo"
          className="border-gray-200 border-2 p-2 text-gray-900"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="bg-white text-gray-900 p-2 ml-2 ">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex flex-row justify-center mt-5 pr-2 text-center text-lg"
          >
            {todo}
            <button
              className="border-gray-200 border-2 mx-2 px-2 flex flex-row justify-center"
              onClick={() => handleTodoDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
