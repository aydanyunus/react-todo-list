import React, { useState, useEffect } from 'react';
import './App.scss';
import Sidebar from './components/sidebar';
import Todolist from './components/todolist';
// import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
  const [isCompleted, setCompleted] = useState(false)
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    getLocalTodos()
  }, [])
  useEffect(() => {
    filteredHandler()
    saveLocalTodos()

  },
    // eslint-disable-next-line 
    [todos, status])

  const filteredHandler = () => {
    switch (status) {
      case 'active':
        setFilteredTodos(todos.filter(todo => todo.isCompleted !== true))
        break;
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.isCompleted === true))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  const AddTodo = (text) => {
    const newtodo = [...todos, { text }]
    setTodos(newtodo)
  }
  const removeTodo = (id) => {
    const newItems = [...todos];
    newItems.splice(id, 1)
    setTodos(newItems)
  }
  const completedTodo = (id) => {
    const completedTodos = [...todos]
    completedTodos[id].isCompleted = !isCompleted;
    setTodos(completedTodos)
    setCompleted(!isCompleted)
  }
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todolocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todolocal)
    }
  }
  return (
    <div className="App">
      <section className="todo__app">
        <div className="container-fluid">
          <div className="todo__app__wrapper">
            <Sidebar />
            <Todolist
              todos={todos}
              addtodo={AddTodo}
              removetodo={removeTodo}
              completedTodo={completedTodo}
              setTodos={setTodos}
              setStatus={setStatus}
              filteredTodos={filteredTodos}
            />
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
