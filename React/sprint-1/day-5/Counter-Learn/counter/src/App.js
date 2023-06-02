
import { useState } from 'react';
import './App.css';

function Counter() {
  let [count, setCount] = useState(0)


  function DisplayCount({ count }) {
    return <p>{count}</p>
  }

  const addfun = () => {
    setCount(count + 1)
  }

  const subfun = () => {
    setCount(count - 1)
  }


  return (
    <div className="App">
      <DisplayCount count={count} />
      <button onClick={addfun} >+</button>
      <button onClick={subfun} >-</button>

    </div>
  );
}

export default Counter;
