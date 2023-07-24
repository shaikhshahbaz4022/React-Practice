import { NavLink } from "react-router-dom";

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
  let ActiveState = {
    textDecoration: "none",
    color: "green",
  };
  let InActiveState = {
    textDecoration: "none",
    color: "black",
  };

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
      {Navlinks.map((ele) => {
        return (
          <NavLink
            to={ele.to}
            style={({ isActive }) => (isActive ? ActiveState : InActiveState)}
          >
            {ele.label}
          </NavLink>
        );
      })}
    </div>
  );
}
export default Navbar;
