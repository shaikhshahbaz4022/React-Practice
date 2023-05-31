
function TodoItems({ title, status, id ,HandleStatus}) {

   const clickNot=()=>HandleStatus(id)
    return (
        <div style={{border:"1px solid black",margin:"10px"}}>
            <p>{title} :- {"  "} {status ? "Completed" : "Not-Completed"}
            <button onClick={clickNot}>Toggle</button>
            <button>DELETE</button>
            </p>

        </div>
    )
}
export default TodoItems