import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function AfterLogin() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()



    const HandleClick = async () => {


        let res = await fetch(`http://localhost:8080/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({ email, password })
        })
        console.log(res);
        let data = await res.json()
        if (data.msg === "Login Succcesfull") {
            localStorage.setItem("token",data.token)
            setTimeout(() => {
                alert(data.msg)
                navigate("/Home");

            }, 2000);
        }
        console.log(data);

    }

    return (
        <div>

            <label >Name:- </label>
            <input type="text" name="name" id="name"
                value={name}
                onChange={(e) => setname(e.target.value)}

            />
            <label >Email :- </label>
            <input type="email" name="email" id="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
            />
            <label >Password :- </label>
            <input type="password" name="password" id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={HandleClick}>Submit </button>
            <button onClick={() => navigate("/Login")} >Go To Login</button>
            <Link to={"/Home"}> Go to  Home Page</Link>
        </div>
    )
}
export default AfterLogin