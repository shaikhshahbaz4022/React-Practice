import Button from "./Buttom"
import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContextProvider"
import { Authcheck } from "../Context/AuthContextProvider"
function Navbar() {
    const { Theme } = useContext(ThemeContext)
    const { isAuth, Logout } = useContext(Authcheck)
    return (
        <div style={
            {
                display:"flex",
                justifyContent:"space-around",
                alignItems:"center",
                border:Theme==="dark"? "1px solid white":"1px solid black"

            }
        }>
            <h2>LOGO</h2>
            <h2>Authenticated_User:- {isAuth ? "YES" : "NO"} </h2>
            <h2>Theme : {Theme === "dark" ? "DARK" : "LIGHT"}</h2>
            <Button text="LOGOUT" onclick={Logout} />
        </div>
    )
}
export default Navbar