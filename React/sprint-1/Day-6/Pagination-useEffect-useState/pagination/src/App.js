
import { useEffect, useState } from 'react';
import './App.css';
import PostsItems from './components/postsItems';

function App() {

  let [data, setdata] = useState([])
  let [loader, setLoader] = useState(false)
  let [err, seterr] = useState(false)
  let [page, setPage] = useState(1)
  let [limit, setLimit] = useState(10)
  let [totalPages, setPagesLength] = useState(0)

  useEffect(() => {
    fetchAndrender(page, limit)
  }, [page, limit])


  const  getData = async (page, limit)=>{

    try {
     let res =  await  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
      let dataLength =Number(res.headers.get("X-Total-Count")) 
     let dataa =  await res.json()
       return{
        data : dataa,
        dataLength : dataLength
       }
    } catch (error) {
      
    }
   
  }
  const fetchAndrender = (page, limit) => {
    setLoader(true) // loader Functionality
     getData(page, limit) //getting data from fetch
      .then((res) => {
        let {data , dataLength} = res
        setPagesLength(Math.ceil(dataLength/limit))
        setdata(data) // setting data into data variable
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
        new Array(totalPages).fill(0).map((ele , ind)=>(

          <button onClick={()=>setPage(ind + 1)} >{ind +1}</button>
        ))
      }
      </div>


    </div>
  )


}


export default App;
