import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  let Navlinks = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About",
      to: "/About",
    },
    {
      label: "Services",
      to: "/Services",
    },
    {
      label: "Users",
      to: "/Users",
    },
  ];
  //   let ActiveState = {
  //     textDecoration: "none",
  //     color: "green",
  //   };
  //   let InActiveState = {
  //     textDecoration: "none",
  //     color: "black",
  //   };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "lightskyblue",
        color: "white",
        padding: "10px",
      }}
    >
      {Navlinks.map((ele) => {
        return (
          <NavLink
            key={ele.to}
            to={ele.to}
            // style={({ isActive }) => (isActive ? ActiveState : InActiveState)}
            className={({ isActive }) =>
              isActive ? styles.active : styles.default
            }
            style={{
              fontSize: "23px",
              fontFamily: "sans-serif",
              fontWeight: "bolder",
            }}
          >
            {ele.label}
          </NavLink>
        );
      })}
    </div>
  );
}
export default Navbar;
