import { useState } from "react"
import './App.css';


function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputvalue] = useState("")

  const handleClickEvent = () => {
    const todoItem = {
      id: Math.floor(Math.random() * 1000),
      title: inputValue,
      status: false,

    }
    //Adding New Todo In todos Array using UseState
    const newItemAdded = [...todos, todoItem]
    //react
    setTodos(newItemAdded)
    setInputvalue("")


  }





  return (
    <div className="App">
      <div>
        <div>
          <input
            placeholder="Enter Your Text Here"
            value={inputValue}
            onChange={(e) => setInputvalue(e.target.value)}

          />
          <button onClick={handleClickEvent} >Submit</button>

        </div>

        <div>
          {/* list of todos */}
          {todos.map((ele) => (
            <div key={ele.id}>
              <p>{ele.title} :- {"  "} {ele.status ? "Completed" : "Not-Completed"}
              
              </p>

            </div>
          ))}
        </div>

      </div>


    </div>
  );
}

export default App;
