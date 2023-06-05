import { useEffect, useState } from "react"
import AddTodo from "./AddTodo"

function Todo() {
    let [todos, setTodos] = useState([])
    let [loading, setLoading] = useState(false)
    let [Error, setError] = useState(false)

    useEffect(()=>{
        fetchAndDisplay()
    },[])

    async function fetchAndDisplay() {
        try {
            setLoading(true)
            let data = await fetch("http://localhost:8080/todos")
            let result = await data.json()
            setTodos(result)
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }

    if(loading){
        return <p>Loading....</p>
    }
    if (Error){
        return <p>Error is occured</p>
    }

    return <div>
        {
            todos.map((ele)=>(
                <AddTodo key={ele.id} {...ele}/>

            ))
        }

    </div>
}
export default Todo