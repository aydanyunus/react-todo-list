import React, { useState } from "react";
import Todo from "./todo";

const Todolist = ({ todos, setTodos, addtodo, removetodo, completedTodo, setStatus, filteredTodos }) => {
  const [value, setValue] = useState("");

  const items = filteredTodos.map((todo, index) => {
    return (
      <Todo
        key={index}
        id={index}
        isCompleted={false}
        todo={todo}
        removetodo={removetodo}
        completedTodo={completedTodo}
      />
    );
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    addtodo(value);
    setValue("");
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const completedItems = todos.filter((item) => {
    return item.isCompleted;
  });
  const statusHandlerAll = (e) => {
    setStatus(e.target.value)
  }
  const statusHandlerActive = (e) => {
    setStatus(e.target.value)
  }
  const statusHandlerCompleted = (e) => {
    setStatus(e.target.value)
  }
  const clearCompletedItems = () => {
    const leftitems = todos.filter(todo => todo.isCompleted !== true)
    setTodos(leftitems)    
  }
 

  return (
    <div className="todolist">
      <div className="todolist__wrapper">
        <h1>todos</h1>
        <form action="" onSubmit={onSubmit} className="form" autoComplete="off">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="What needs to be done?"
            value={value}
            onChange={onChange}
          />
        </form>
        <div className="todolist_items">
          <ul>{items}</ul>
          <div className={todos.length > 0 ? "footer show" : "footer hide"}>
            <span>{todos.length - completedItems.length} items left</span>
            <div className='buttons'>
              <button value='all' onClick={statusHandlerAll}>
                all
              </button>
              <button value='active' onClick={statusHandlerActive}>
                active
              </button>
              <button value='completed' onClick={statusHandlerCompleted}>
                completed
              </button>
            </div>
            <span
                className={completedItems.length > 0 ? 'clear show': 'clear'}     
                onClick={clearCompletedItems}  
              >
                clear completed
              </span>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Todolist;
