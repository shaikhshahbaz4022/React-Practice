import { useContext } from "react"
import { Authcheck } from "../Context/AuthContextProvider"
import Button from "./Buttom"
function Login() {
    const { isAuth, Login, Logout } = useContext(Authcheck)
    return (
        <div>
            <h1>User Authenticated : {isAuth ? "Yes" : "No"}</h1>
            <Button text="LOGIN" onclick={Login} />
            <br/>
            <br />
            <Button text="LOGOUT" onclick={Logout} />
        </div>
    )
}
export default Login