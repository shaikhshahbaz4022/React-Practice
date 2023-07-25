import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function LoginPage() {
  const { Login, isAuth } = useContext(AuthContext);

  return (
    <div>
      <h1>LOGIN</h1>
      {/* <button onClick={() => Login()}>LOGIN HERE</button> */}
    </div>
  );
}
export default LoginPage;
