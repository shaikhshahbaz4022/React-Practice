import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodos } from "../redux/action";

const Todos = () => {
  const [text, settext] = useState("");
  const dispatch = useDispatch();
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
          dispatch(addtodos(text));
        }}
      >
        ADD TODOS
      </button>
      <div>
        {todo.map((e, i) => (
          <div key={i}>{e}</div>
        ))}
      </div>
    </div>
  );
};
export default Todos;
