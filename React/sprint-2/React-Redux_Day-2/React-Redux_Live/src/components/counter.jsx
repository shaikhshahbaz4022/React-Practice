// import { store } from "../redux/store";s
import { useDispatch, useSelector } from "react-redux";
import { addCounter } from "../redux/counter/action";
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.counterReducer.counter);
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
