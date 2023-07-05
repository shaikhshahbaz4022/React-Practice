import { Routes, Route } from "react-router-dom";
import AfterLogin from "./login2";
import Login from "./login";
import HomePage from "./home";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<AfterLogin />} />
            <Route path="/Home" element={<HomePage />} />

        </Routes>
    )
}
export default Main

