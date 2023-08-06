import { store } from "../redux/store";

const Counter = () => {
  console.log(store.getState());
  return (
    <div>
      <h1>Count : 0</h1>
      <button>INC</button>
    </div>
  );
};
export default Counter;
