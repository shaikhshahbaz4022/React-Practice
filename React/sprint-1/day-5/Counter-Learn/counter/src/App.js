
import { useState } from 'react';
import './App.css';

// function Counter() {
//   let [count, setCount] = useState(0)


//   function DisplayCount({ count }) {
//     return <p>{count}</p>
//   }

//   const addfun = () => {
//     setCount(count + 1)
//   }

//   const subfun = () => {
//     setCount(count - 1)
//   }


//   return (
//     <div className="App">
//       <DisplayCount count={count} />
//       <button onClick={addfun} >+</button>
//       <button onClick={subfun} >-</button>

//     </div>
//   );
// }

function Counter() { //  child To Parent
  let [count, setCount] = useState(0)

  function Child({ count, addfun, Subfun }) {
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={addfun} >+</button>
        <button onClick={Subfun} >-</button>


      </div>
    )
  }
  const addfun = () => {
    setCount(count + 1)
  }
  const subfun = () => {
    setCount(count - 1)
  }
  return (
    <div className='App' >
      <Child count={count} addfun={addfun} Subfun={subfun} />
    </div>
  )
}

export default Counter;
