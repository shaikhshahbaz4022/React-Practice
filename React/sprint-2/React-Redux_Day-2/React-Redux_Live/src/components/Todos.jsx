import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodos } from "../redux/action";
import axios from "axios";

const Todos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = () => {
    axios.get(`http://localhost:3004/todos`).then(({ data }) => {
      console.log(data);
      dispatch(addtodos(data)); // call dispatch when we get all the data
    });
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
  const [text, settext] = useState("");
  const todo = useSelector((store) => store.todos);
  console.log(todo);
  return (
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
        {todo.map((e, i) => (
          <div key={i}>
            {e.title} <button onClick={() => handleClick(e.id)}>DELETE</button>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todos;
