import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Users from "../Pages/Users";
import UserSinglePage from "../Pages/UsersSinglePage";
function Routesfun() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Services" element={<Services />}></Route>
      <Route path="/Users" element={<Users />}></Route>
      <Route path="/Users/:userID" element={<UserSinglePage />}></Route>
    </Routes>
  );
}
export default Routesfun;
