import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "skyblue",
        color: "white",
      }}
    >
      <Link to={"/"}>Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Services">Services</Link>
      <Link to="/Users">Users</Link>
    </div>
  );
}
export default Navbar;
