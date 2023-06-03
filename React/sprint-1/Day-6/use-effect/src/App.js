
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
  let [page, setPage] = useState(1)
  let [limit, setLimit] = useState(10)
  let [datalimit, setdataLimit] = useState(0)

  useEffect(() => {
    fetchAndrender(page, limit)
  }, [page, limit])

  const fetchAndrender = (page, limit) => {
    setLoader(true)
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
      .then((res) => {
        let x = res.headers.get("X-Total-Count")
        setdataLimit(x)
        return res.json()

      }


      )
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
  function handlePage(val) {
    let updatedPage = page + val
    setPage(updatedPage)
  }

  return (
    <div className='App'>
      <div>
        <button onClick={() => setLimit(10)} >10</button>
        <button onClick={() => setLimit(20)} >20</button>
        <button onClick={() => setLimit(50)} >50</button>


      </div>
      <div>
        {
          data.map((ele) => (
            <PostsItems key={ele.id} {...ele} />

          ))
        }
      </div>
      <div>
        <button disabled={page <= 1} onClick={() => handlePage(-1)}>Previous</button>
        <button disabled>{page}</button>
        <button disabled={page >= Math.ceil(datalimit / limit)} onClick={() => handlePage(1)}>NEXT</button>
            {/* 3 >= ceil(100/20) */}
      </div>


    </div>
  )


}

export default App;
