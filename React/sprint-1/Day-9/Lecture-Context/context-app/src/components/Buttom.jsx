import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContextProvider"
function Button({ text, onclick }) {
    const {Theme} = useContext(ThemeContext)
    // console.log(Theme);
    return (
        <button
            onClick={onclick}
            style={{ 
                backgroundColor: Theme === "dark" ? "black" : "white" ,
                color : Theme=== "dark" ? "white" : "black",
                padding:"10px",
                border : Theme==="dark"? "2px solid white" : "2px solid black",
                borderRadius:"3px"
        }}
        >


            {text}</button>
    )
}
export default Button