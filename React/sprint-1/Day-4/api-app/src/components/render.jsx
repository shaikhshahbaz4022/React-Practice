function Render({ title, completed, id }) {
    return (
        <div>
            <p>{title}</p>
            <p>status :- {completed ? "true" : "false"}</p>
            <p>user ID :- {id}</p>

        </div>
    )
}
export default Render