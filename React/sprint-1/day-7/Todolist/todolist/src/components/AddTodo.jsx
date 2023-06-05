import { useState } from "react"

function AddTodo({ addNewTodos, UpdateNewTodo, allTodos }) {
    let [text, setText] = useState("")
    let [newtext, setNewText] = useState("")
    let [toggle, setToggle] = useState(false)
    let [ids, setIDs] = useState(0)
   
    function AddNewTodo() {
        let newTodo = {
            "title": text,
            "status": false
        }
        addNewTodos(newTodo)

    }
    function UpdateTodo() {
        let updatedT = {
            "title": newtext,
            "status": toggle
        }
        allTodos.map((ele)=>
           ele.id===ids ? UpdateNewTodo(updatedT) : <p>Err</p>
        )

    }



    return <div>
        <div>
            <input
                value={ids}
                placeholder="Enter ID"
                onChange={(e) => setIDs(e.target.value)}

            />
            <input
                value={newtext}
                placeholder="Updated Text"
                onChange={(e) => setNewText(e.target.value)}

            />
            <button onClick={() => setToggle(!toggle)}>{toggle ? "Set False" : "Set True"}</button>
            <button onClick={UpdateTodo}>UPDATE</button>
        </div>
        <input
            value={text}
            placeholder="Add new todo"
            onChange={(e) => setText(e.target.value)}

        />
        <button onClick={AddNewTodo} >ADD TODO</button>
    </div>
}
export default AddTodo