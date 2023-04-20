import React, { useState } from "react";
import "./App.css"


const App = () => {
  const [todos, setTodos] = useState([
    { id : 1, todo : 'React배우기!'},
    { id : 2, todo : 'CSS공부하기!'}
  ])
  
  const [todo, setTodo] = useState('')

  const todoChangeHandler = (event) => {
    setTodo(event.target.value)
  }

  const todoAddButton = () => {
    const newTodo = {
      id : todos.length + 1,
      todo
    }
    setTodos([...todos, newTodo])
    setTodo("")
  }

  return (
    <div className='layoutStyle'>
      <div>
        <input className="add-input"
        value={todo}
        onChange={todoChangeHandler}
        />
        <button
        className="add-button" 
        onClick={todoAddButton}>
          추가하기
        </button>
      </div>
      <div className='list-container'>
        <h1 className='todo-list'>Todo List</h1>
        <div className='list-group'>
          {todos.map((todo) => {
            return (
              <div key={todo.id}className='squareStyle'>
                {todo.todo}
              </div>
            )
          })}
        </div>   
      </div>
    </div>
  );
};

export default App; 