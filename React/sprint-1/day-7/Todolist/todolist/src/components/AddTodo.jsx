function AddTodo({title,status}){
    return <div style={{border:"1px solid black" , margin:"10px"}}>
        <p>{title}</p>
        <p>{status ? "Compleated" : "Not Compleated"}</p>
    </div>
}
export default AddTodo