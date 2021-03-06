import './App.css';
import React, { useState } from 'react'

function CardForm() {

  const [value, setValues] = useState('');

  const [todos, setTodos] = useState([])

  const addTodo = () => {
        setTodos([...todos, {
            id: todos.length + 1,
            text: value,
            // completed: false
          }
        ]);
      };

  const handleOnChange = (e) => {
      setValues(e.target.value)
  }


  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (value !== '') {
      addTodo();
      setValues('')
      }
      return;
      //Como es vacío devuelvo 'nada0 o no toco la función
    }

  return (
    <div>
      <form onSubmit = {handleOnSubmit}>
      <input 
      type="text"
      placeholder="Add a new todo"
      value= {value}
      onChange= {handleOnChange} 
      />
      <button >Add</button>
      </form>
        <br></br>
      <div>
      <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <span

              >
                {todo.text}
              </span>
              <span 
            
              >
                
              </span>
            </li>
          ))}
        </ul>
      </div>
        
    </div>
  );
};



function App() {

  return (
    <div className="App">
      <CardForm/>
    </div>
  );
}

export default App;
