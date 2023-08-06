import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodos } from "../redux/action";
const TodoInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  function HandleClick() {
    const payload = {
      title,
      status: false,
      id: uuid()
    };
    const action = addTodos(payload);
    dispatch(action);
  }
  return (
    <div>
      <h1>Add Todos</h1>
      <input
        type="text"
        placeholder="Enter Something "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={HandleClick}>ADD</button>
    </div>
  );
};

export default TodoInput;
