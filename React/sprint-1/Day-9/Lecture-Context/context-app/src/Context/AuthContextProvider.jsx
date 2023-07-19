import { createContext, useState } from "react"
export const Authcheck = createContext()
function AuthContext({ children }) {
    const [isAuth, setisAuth] = useState(false)
    function Login() {
        setisAuth(true)
    }
    function Logout() {
        setisAuth(false)
    }
    return (
        <Authcheck.Provider value={{ isAuth, Login, Logout }} >{children}</Authcheck.Provider>
    )
}
export default AuthContext