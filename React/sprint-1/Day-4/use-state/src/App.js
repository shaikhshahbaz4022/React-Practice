import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  const handleDeposit = () => {
    setCount(count + 100)
    console.log(`${count} console`);
  }
  console.log("rendering", Date.now());
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleDeposit} >Deposit 100</button>
      <button onClick={() => setCount(count - 100)} >Widhtraw</button>
    </div>
  );
}

export default App;
