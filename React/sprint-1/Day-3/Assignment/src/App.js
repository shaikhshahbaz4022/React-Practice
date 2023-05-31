import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react"

function App() {
  const [Count, setCount] = useState(0)

  const add = () => {
    return setCount(Count + 1)
  }
  const subs = () => {
    return setCount(Count - 1)
  }
  const mul = () => {
    return setCount(Count * 2)
  }
  return (
    <div className="App">
      <div data-testid="counter">
        <Counter count={Count} add={add} subs={subs} mul={mul} />
      </div>
    </div>
  );
}

export default App;
