import { useState } from "react";
import Grocerydetails from "./Components/Grocerydetails";
import "./App.css"

function App() {

  let [dataaaa, setdata] = useState([])
  let [dis, setDis] = useState(false)


  async function FecthAndRender() {
    await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        // console.log(data);
        setdata(res.data)
        setDis(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }



  return (
    <div className="App">
      <div>
        <h1>Groceries</h1>
        <button disabled={dis} onClick={FecthAndRender}>Get Groceries</button>
        <Grocerydetails data={dataaaa} />


      </div>
    </div>
  );
}

export default App;
