function TodoItem({ title, status }) {
    return <div style={{ border: "1px solid black", margin: "10px" }}>
        <p>{title}</p>
        <p style={{ color: status ? "green" : "red" , fontWeight:"bold" }}>{status ? "Completed" : "Not Completed"}</p>
    </div>
}
export default TodoItem