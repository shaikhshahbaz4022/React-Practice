import Fiction from "./components/Fiction";
import { useState } from "react";
import NonFiction from "./components/NonFiction";
function App() {
  let [toggle, setToggle] = useState(false)
  function HandleToggle() {
    setToggle(!toggle)
  }

  return (
    <div>
      <h1>Mini Book Store</h1>

      <button onClick={HandleToggle} data-testid="toggle-btn">{toggle ? "Show Fictional Books" : "Show Non-Fiction Books"}</button>
      {/* <h1 data-testid="books-container-title">{!toggle ? "Fictional Books" : "Non-Fiction Books"}</h1> */}

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */

          !toggle ? <Fiction toggleval={toggle} /> : <NonFiction toggleval={toggle} />
        }

      </div>
    </div>
  );
}

export default App;
