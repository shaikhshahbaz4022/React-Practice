
import { useEffect, useState } from 'react';
import './App.css';
import PostsItems from './components/postsItems';

function App() {

  let [data, setdata] = useState([]) // storing Data
  let [loader, setLoader] = useState(false) // for loader
  let [err, seterr] = useState(false) // for error handling
  let [page, setPage] = useState(1)  // for maintaining The Page Count

  let [limit, setLimit] = useState(10)
  let [totalPages, setPagesLength] = useState(0)

  useEffect(() => {
    fetchAndrender(page, limit)
  }, [page, limit])


  const getData = async (page, limit) => {

    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)

      //Getting All Data Length using this --->
      let dataLength = Number(res.headers.get("X-Total-Count"))
      let dataa = await res.json()
      // returning in the form of object
      return {
        posts: dataa,
        PostsLength: dataLength
      }
    } catch (error) {
      console.log(error);
    }

  }
  const fetchAndrender = (page, limit) => {
    setLoader(true) // loader Functionality
    getData(page, limit) //getting data from fetch
      .then((res) => {
        let { posts, PostsLength } = res
        setPagesLength(Math.ceil(PostsLength / limit))
        setdata(posts) // setting data into data variable
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

      <div>
        <h3>Set Limit</h3>
        <button onClick={() => setLimit(10)} >10</button>
        <button onClick={() => setLimit(20)} >20</button>
        <button onClick={() => setLimit(50)} >50</button>


      </div>
      <div>
        <h3>You are in Page No {page}</h3>
        {
          data.map((ele) => (
            <PostsItems key={ele.id} {...ele} />
            // ...ele === id={id} title={title} ,it passes all the keys , you only need to destructure it
          ))
        }
      </div>
      <div>
        {
          // creating buttons using new Array Method

          new Array(totalPages).fill(0).map((ele, ind) => (

            //  ind =0 , we have to start page no from 1 , thats why ind+1 = 1

            <button onClick={() => setPage(ind + 1)} >{ind + 1}</button>
          ))
        }
      </div>


    </div>
  )


}


export default App;
