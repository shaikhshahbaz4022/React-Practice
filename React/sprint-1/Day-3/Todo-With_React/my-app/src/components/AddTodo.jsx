import {useState} from "react"

function AddTodos({handleAddTodos}) {
    const [inputValue, setInputvalue] = useState("")
 const handleClick =()=>{
    handleAddTodos(inputValue)
    setInputvalue("")
 }
//  console.log(handleClick);

    return (

        <div>
            <input
                placeholder="Enter Your Text Here"
                value={inputValue}
                onChange={(e) => setInputvalue(e.target.value)}

            />
            <button onClick={handleClick} >Submit</button>

        </div>
    )
}
export default AddTodos