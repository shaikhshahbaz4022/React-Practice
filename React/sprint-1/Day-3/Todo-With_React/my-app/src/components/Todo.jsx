import { useState } from "react"
import TodoItems from "./TodoItems"
import AddTodos from "./AddTodo"



function Todo() {
    const [todos, setTodos] = useState([])

    const handleAddTodos = (text) => {
        const todoItem = {
            id: Math.floor(Math.random() * 1000),
            title: text,
            status: false,

        }
        //Adding New Todo In todos Array using UseState
        const newItemAdded = [...todos, todoItem]
        //react
        setTodos(newItemAdded)

    }

    const HandleStatus = (id) => {
        const updatedTodos = todos.map((ele) => {
            if (ele.id === id) {
                return {
                    ...ele,
                    status: !ele.status
                }
            } else {
                return ele
            }
        })
        setTodos(updatedTodos)
    }
    function handleDelete(id) {
        let updatedTodos = todos.filter((todo) => {
            if (todo.id === id) {
                return false
            } else {
                return true
            }
        })
        setTodos(updatedTodos)
    }

    return (

        <div>

            <AddTodos handleAddTodos={handleAddTodos} />
            <div>
                {/* list of todos */}
                {todos.map((ele) => (
                    <TodoItems
                        key={ele.id}
                        title={ele.title}
                        status={ele.status}
                        id={ele.id}
                        HandleStatus={HandleStatus}
                        handleDelete={handleDelete}

                    />
                ))}
            </div>

        </div>



    );
}

export default Todo;
