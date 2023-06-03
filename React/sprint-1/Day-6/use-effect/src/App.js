
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0)
  let [count1, setCount1] = useState(10)

  console.log(1);
  useEffect(() => {
    console.log("inside useEffect");
    document.title = `Count is ${count1}`
  },[count1])

  console.log(2);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} >INC</button>
      <h1>{count1}</h1>
      <button onClick={() => setCount1(count1 + 10)} >INC 10</button>
    </div>
  );
}

export default App;
