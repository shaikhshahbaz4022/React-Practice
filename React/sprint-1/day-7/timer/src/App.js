
import { useState } from 'react';
import './App.css';
import Timer from './components/timer';


function App() {
  
  let [toggle, setToggle] = useState(false)
  return (
    <div className="App">
    
      {/* if toggle and timer is true then only you start timer */}
      {toggle && <Timer />}
      <button onClick={() => setToggle(!toggle)} >{toggle ? "Hide Timer" : "Show Timer"}</button>
    </div>
  );
}

export default App;
