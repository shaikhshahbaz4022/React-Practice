import { useState } from "react"
import TodoItems from "./TodoItems"
import AddTodos from "./AddTodo"


//useReduce
function Todo() {
    const [todos, setTodos] = useState([])
     console.log(todos);
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
      const updatedTodos = todos.map((ele)=> ele.id===id ? {...ele , status : !ele.status} : ele)
    
        setTodos(updatedTodos)
    }
    function handleDelete(id) {
        let updatedTodos = todos.filter((todo) =>todo.id !== id)
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
