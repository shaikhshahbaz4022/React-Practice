
import './App.css';
import { useState } from "react"
import Render from "./components/render"
function App() {
  let [err, setErr] = useState(false)
  let [loader, setLoader] = useState(false)
  let [posts, setPosts] = useState([]) //initially we required empty array

  // console.log(posts);
  //---> Fetch Data function Seperate
  async function fetchdata(url) {
    return fetch(url)
      .then((res) => res.json())
  }
  //--->

  function HandleClick() {
    setLoader(true)
    //-------> Calling Fetch Data Function 
    fetchdata("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //-------->
      .then((res) => {
        setLoader(false)
        // console.log(res);
        setPosts(res)

      })
      .catch(() => {
        setErr(true)
        setLoader(false)
      })



  }
  if (loader) {
    return <h1>Loading...</h1>
  }
  if (err) {
    return <h1>Something went Wrong please try after some times</h1>
  }

  return (
    <div className="App">
      <h1>Click On below button To get posts</h1>
      <button onClick={HandleClick} >GET POSTS</button>

      {
        posts.map((ele) => (
          <Render key={ele.id} title={ele.title} completed={ele.completed} id={ele.id} />


        ))
      }
    </div>
  );
}

export default App;
