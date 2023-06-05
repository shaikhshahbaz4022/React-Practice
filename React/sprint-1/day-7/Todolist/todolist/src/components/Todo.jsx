import { useEffect, useState } from "react"


import TodoItem from "./TodoItem"
import AddTodo from "./AddTodo"

function Todo() {
    let [todos, setTodos] = useState([])
    let [loading, setLoading] = useState(false)
    let [Error, setError] = useState(false)

    // mount phase 
    useEffect(() => {
        fetchAndDisplay()
    }, [])

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

    function UpdateNewTodo(id, updatedTodo) {
        fetch(`http://localhost:8080/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(updatedTodo)
        })
            .then((res) => res.json())
            .then(() => {
                fetchAndDisplay()
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    function DeleteReq(id){
        fetch(`http://localhost:8080/todos/${id}`,{
         method : "DELETE"
             
        }).then(()=>{
            fetchAndDisplay()
        })
    }
    function addNewTodos(newTodo) {
        fetch("http://localhost:8080/todos", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(newTodo)

        })
            .then((res) => res.json())
            .then(() => {
                fetchAndDisplay()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    if (loading) {
        return <p>Loading....</p>
    }
    if (Error) {
        return <p>Error is occured</p>
    }

    return <div>

        <AddTodo allTodos={todos} addNewTodos={addNewTodos}  />
        {
            todos.map((ele) => (
                <TodoItem key={ele.id} {...ele} UpdateNewTodo={UpdateNewTodo}  DeleteReq={DeleteReq} />

            ))
        }

    </div>
}
export default Todo