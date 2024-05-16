import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleComplete = (index) => {
    const todo = todos[index];
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    setCompletedTodos([...completedTodos, todo]);
  };

  const handleDelete = (index, type) => {
    if (type === 'todo') {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    } else {
      const newCompletedTodos = completedTodos.filter((_, i) => i !== index);
      setCompletedTodos(newCompletedTodos);
    }
  };

  return (
    <body className="back">
    <div className="App">
      <h1 className="title">UMC Study Plan</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="UMC 스터디 계획을 작성해보세요~"
        />
        <button type="submit">추가</button>
      </form>
      <div>
        <h2>해야할 일</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleComplete(index)}>완료</button>
              <button onClick={() => handleDelete(index, 'todo')}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>해낸 일</h2>
        <ul>
          {completedTodos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleDelete(index, 'completed')}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </body>
  );
}

export default App;