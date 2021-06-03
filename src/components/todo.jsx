import React from "react";
import Icons from "../icons/icons.svg";

const Todo = ({ todo, isCompleted, removetodo, id, completedTodo }) => {
  const handleClick = () => {
    completedTodo(id)
  }
  return (
    <li>
      <div className="item__content">
        <div className="circle" onClick={handleClick}>
          {todo.isCompleted ? (
            <svg>
              <use xlinkHref={`${Icons}#icon-checkbox`}></use>
            </svg>
          ) : (
            ""
          )}
        </div>
        <p className={todo.isCompleted ? "line" : ""}>
        {todo.text}
      </p>
      </div>
   
      <span onClick={() => removetodo(id)}>
        <svg>
          <use xlinkHref={`${Icons}#icon-cancel`}></use>
        </svg>
      </span>
    </li>
  );
};
export default Todo;
