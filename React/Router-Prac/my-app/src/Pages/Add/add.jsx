import { useState } from "react"
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"

function AddFun() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const navigate = useNavigate()

    function HandleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:8000/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                name,
                description,
                deadline,
                isCompleted: false
            })

        })
            .then((res) => res.json())
            .then(() => {
                navigate("/")
            })
            .catch((err) => {
                alert("Error",err.message)
            })

    }

    return <div>ADD
        <form onSubmit={HandleSubmit}>
            <input placeholder="name" type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}

            />
            <textarea placeholder="Disc"
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
            ></textarea>
            <input placeholder="deadline" type="date"
                value={deadline}
                onChange={(e) => {
                    setDeadline(e.target.value)
                }}
            />

            <input type="submit" value="Submit" />

        </form>



    </div>

}
export default AddFun