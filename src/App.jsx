import { useState } from 'react';

function App() {
  // handle textbox value
  const [input, setInput] = useState('');
  // prepare todos handler array
  const [todos, setTodos] = useState([]);
  // handle submit
  function addTodo() {
    const item = {
      id: Math.floor(Math.random()* 1000),
      value: input,
      status: false
    }
    const addTodoValue = item.value.trim()
    const todoValidator = /([a-zA-Z\-]+){3,}/
    if(!addTodoValue) {
      alert('Please type the job to do')
    }
    else if(!todoValidator.test(addTodoValue)) {
      alert('Must contain at least a three-letter word')
    }
    else {
    setTodos(oldTodos => [...oldTodos, item]);
    setInput('');
    }
  }
  // handle delete todo
  function deleteTodo(id) {
    const newTodoList = todos.filter(todo => todo.id !== id);
    setTodos(newTodoList)
  }
  // mark todo as done
  function doneTodo(id) {
    const todoIndex = todos.findIndex(todo => todo.id == id);
    const tmpTodos = [...todos];
    tmpTodos[todoIndex].status = true
    setTodos(tmpTodos)
  }
  return (
    <div className='App'>
      <div className="card bg-warning p-5 pb-4 border-danger position-absolute top-50 start-50 translate-middle">
        <input type='text' onChange={e => setInput(e.target.value)} value={input} placeholder='THINGS TO DO' className='form-control mb-2 border-danger' style={{textAlign: 'center'}}/>
        <button onClick={() => addTodo()} className='btn btn-danger'>LIST</button>
        <hr />
          {todos.map(todo => {
            return (
              <div key={todo.id} style={{textDecoration: todo.status ? 'line-through' : ''}} className='d-flex align-items-center pb-2'>
                  <div className='col'>{todo.value}</div>
                  <div><button className='btn btn-success ms-2 col' onClick={() => deleteTodo(todo.id)}>Delete</button></div>
                  <div><button className='btn btn-primary ms-2 col' onClick={() => doneTodo(todo.id)}>Done</button></div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default App;