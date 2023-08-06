import React from "react";
import { useSelector } from "react-redux";
const TodoList = () => {
  const todos = useSelector((todo) => todo.todos);
  console.log(todos);
  return (
    <div>
      {todos.map((ele) => {
        return (
          <div key={ele.id}>
            <h1>{ele.title}</h1>
          </div>
        );
      })}
    </div>
  );
};
export default TodoList;
