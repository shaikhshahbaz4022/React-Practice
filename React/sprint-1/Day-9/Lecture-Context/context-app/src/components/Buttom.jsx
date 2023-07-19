import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContextProvider"
function Button({ text, onclick }) {
    const {Theme} = useContext(ThemeContext)
    // console.log(Theme);
    return (
        <button
            onClick={onclick}
            style={{ 
                backgroundColor: Theme === "dark" ? "white" : "black" ,
                color : Theme=== "light" ? "white" : "black",
                padding:"10px",
                border : Theme==="dark"? "2px solid white" : "2px solid black"
        }}
        >


            {text}</button>
    )
}
export default Button