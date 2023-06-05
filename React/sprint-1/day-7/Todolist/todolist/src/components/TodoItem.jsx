function TodoItem({ title, status, id, UpdateNewTodo, DeleteReq }) {

    function Updated() {
        let upd = {
            id,
            title,
            status: !status

        }
        UpdateNewTodo(id, upd)
    }
    function DelOnClick() {
        DeleteReq(id)
    }

    return <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
        <p>{id}</p>
        <p>{title}</p>
        <p style={{ color: status ? "green" : "red", fontWeight: "bold" }}>{status ? "Completed" : "Not Completed"}</p>

        <button style={{padding:"4px" , margin:"5px" ,backgroundColor : status ? "red" : "green" ,color:"white"}} onClick={Updated}>{status ? "NOT-COMP" : "COMPLETED"}</button>

        <button style={{padding:"4px" , margin:"5px" ,backgroundColor : "red"  ,color:"white" }} onClick={DelOnClick}>DELETE</button>
    </div>
}
export default TodoItem