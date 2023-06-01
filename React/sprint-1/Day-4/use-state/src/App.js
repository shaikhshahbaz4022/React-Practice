import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  const handleDeposit = (amt) => {
    // setCount(count + amt)
    // setCount(count + amt)
    // setCount(count + amt)
    // setCount(count + amt)

    //if we pass callback function then the callback funtion able to have the value of preveously updated count and if we want to use is we can use it 
    setCount((prevCount) => prevCount + 100) // 0   + 100 = 100
    setCount((prevCount) => prevCount + 100) // 100 + 100 = 200
    setCount((prevCount) => prevCount + 100) // 200 + 100 = 300
    setCount((prevCount) => prevCount + 100) // 300 + 100 = 400



    console.log(`${count} console`);
  }
  //if state change then only react render the app
  console.log("rendering", Date.now());
  //--- --->
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => handleDeposit(100)} >Deposit 100</button>
      <button onClick={() => setCount(count - 100)} >Widhtraw</button>
    </div>
  );
}

export default App;
