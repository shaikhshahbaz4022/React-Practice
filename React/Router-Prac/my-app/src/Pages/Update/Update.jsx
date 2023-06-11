import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Update() {
    const navigate = useNavigate()
    const { todoID } = useParams()
    const [todo, setTodo] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:8000/todos/${todoID}`)
            .then((res) => res.json())
            .then((data) => {
                setTodo(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [todoID])

    const HandleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8000/todos/${todoID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(todo)

        })
            .then((res) => res.json())
            .then(() => {
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            {
                todo ? (<form onSubmit={HandleSubmit}>
                    <input placeholder="name" type="text"
                        value={todo.name}
                        onChange={(e) => {
                            setTodo({ ...todo, name: e.target.value })
                        }}

                    />
                    <textarea placeholder="Disc"
                        value={todo.description}
                        onChange={(e) => {
                            setTodo({ ...todo, description: e.target.value })
                        }}

                    ></textarea>
                    <input placeholder="deadline" type="date"
                        value={todo.deadline}
                        onChange={(e) => {
                            setTodo({ ...todo, description: e.target.value })
                        }}

                    />

                    <input type="submit" value="Submit" />

                </form>) : null
            }


        </div>
    )
}

export default Update