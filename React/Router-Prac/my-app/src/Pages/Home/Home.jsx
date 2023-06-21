import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    const [fetcheddata, setFetchedData] = useState([])
    function FetchAndDisplay() {
        fetch(`http://localhost:8000/todos`)
            .then((res) => res.json())
            .then((data) => {
                setFetchedData(data)
               console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        FetchAndDisplay()
    }, [])





    return (
        <div >
            {
                fetcheddata.map((ele) => {
                    return (
                        <div

                            style={{
                                border: "2px solid black",
                                margin: "10px"
                            }}
                            key={ele.id}>
                            <h3>Name :- {ele.name}</h3>
                            <h3> Desc :- {ele.description}</h3>
                            <h3>Deadline :- {ele.deadline}</h3>
                            <h3>Status :-  {ele.isCompleted ? "COMP" : "NOT"}</h3>
                            <Link to={`/update/${ele.id}`}>Update</Link>
                            <button onClick={() => {
                                fetch(`http://localhost:8000/todos/${ele.id}`, {
                                    method: "DELETE"
                                }).then(() => {
                                    FetchAndDisplay()
                                    navigate("/")
                                })
                            }} >DELETE</button>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home