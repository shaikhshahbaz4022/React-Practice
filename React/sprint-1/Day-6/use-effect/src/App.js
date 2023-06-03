
import { useEffect, useState } from 'react';
import './App.css';
import PostsItems from './components/postsItems';


// let [count, setCount] = useState(0)
// let [count1, setCount1] = useState(10)

// console.log(1);
// useEffect(() => {
//   console.log("inside useEffect");
//   document.title = `Count is ${count1}`
// },[count1])

// console.log(2);
// return (
//   <div className="App">
//     <h1>{count}</h1>
//     <button onClick={() => setCount(count + 1)} >INC</button>
//     <h1>{count1}</h1>
//     <button onClick={() => setCount1(count1 + 10)} >INC 10</button>
//   </div>
// );
function App() {

  let [data, setdata] = useState([])
  let [loader, setLoader] = useState(false)
  let [err, seterr] = useState(false)


  useEffect(() => {
    fetchAndrender()
  }, [])

  const fetchAndrender = () => {
    setLoader(true)
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((res) => {

        setdata(res)
        setLoader(false)
      })
      .catch(() => {
        setLoader(false)
        seterr(true)
      })
  }
  if (loader) {
    return <h1>Loading ...</h1>
  }
  if (err) {
    return <h1>error , refresh again</h1>
  }

  return (
    <div className='App'>
      {
        data.map((ele) => (
          <PostsItems key={ele.id} {...ele} />
  
      ))
      }

    </div>
  )


}

export default App;
