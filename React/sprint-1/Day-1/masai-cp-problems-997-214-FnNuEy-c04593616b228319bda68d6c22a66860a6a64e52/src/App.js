// import Courses ,Title and UserCard here
import Title from "./Components/Title";
import UserCard from "./Components/UserCard";
import Courses from "./Components/Courses";
// keep a user object with mentioned properties and pass down to UserCard as prop
import { useState } from "react";

export default function App() {
  // const [current, setbtnfun] = useState(false)
  // const handleFollow = () => {
  //   return setbtnfun(!current)
  // }

  return <>
    <Title />
    <UserCard />
    <Courses />

  </>;

}
