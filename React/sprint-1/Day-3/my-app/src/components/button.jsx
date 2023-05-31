import { useState } from "react"
function MyButton(){
    const [count,setCount] = useState(0)
    return (
        <div>
            <h1>Use State</h1>
            <h1>counter :- {count}</h1>
            <button disabled={count>=20} onClick={()=>setCount(count+1)}>Add</button>
            <button disabled={count<=0} onClick={()=>setCount(count-1)} >Reduce</button>

        </div>
    )
}
export default MyButton