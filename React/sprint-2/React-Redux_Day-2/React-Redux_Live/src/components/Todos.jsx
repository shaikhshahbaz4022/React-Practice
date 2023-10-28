import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../redux/Todo/action";
import axios from "axios";

const Todos = () => {
  const [text, settext] = useState("");
  const { todos, loading, error } = useSelector((store) => store.todoReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = () => {
    dispatch(getAllTodos());
  };
  const addTodo = () => {
    axios
      .post(`http://localhost:3004/todos`, {
        title: text,
        status: false,
      })
      .then(() => getTodos());
  };
  const handleClick = (id) => {
    console.log("dleete id", id);
    axios
      .delete(`http://localhost:3004/todos/${id}`)
      .then(() => getTodos())
      .catch((e) => console.log(e));
  };

  return loading ? (
    "LOADING..."
  ) : error ? (
    "ERROR"
  ) : (
    <div>
      <input
        type="text"
        onChange={(e) => settext(e.target.value)}
        placeholder="Add Todos"
      />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        ADD TODOS
      </button>
      <div>
        {todos.map((e, i) => (
          <div key={i}>
            {e.title} <button onClick={() => handleClick(e.id)}>DELETE</button>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todos;
