import { useState } from "react"

function AddTodo({ addNewTodos}) {
    let [text, setText] = useState("")
    
   
    function AddNewTodo() {
        let newTodo = {
            "title": text,
            "status": false
        }
        addNewTodos(newTodo)

    }
     

    return <div>
        
        <input
            value={text}
            placeholder="Add new todo"
            onChange={(e) => setText(e.target.value)}

        />
        <button onClick={AddNewTodo} >ADD TODO</button>
    </div>
}
export default AddTodo