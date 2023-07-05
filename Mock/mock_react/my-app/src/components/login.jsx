import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"

function Login() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()



    const HandleClick = async () => {


        let res = await fetch(`http://localhost:8080/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        })
        console.log(res);
        let data = await res.json()
        if (data.msg === "registration Succesfull") {

            setTimeout(() => {
                alert(data.msg)
                navigate("/Login");

            }, 2000);
        }

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
            <Link to={"/Login"}> Go to  Home Page</Link>
        </div>
    )
}

export default Login