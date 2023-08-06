import { addCounter } from "../redux/action";
// import { store } from "../redux/store";s
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.counter);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          dispatch(addCounter(1));
        }}
      >
        INC
      </button>
    </div>
  );
};
export default Counter;
