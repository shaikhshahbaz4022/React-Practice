// import Courses ,Title and UserCard here
import Title from "./Components/Title";
import UserCard from "./Components/UserCard";
import Courses from "./Components/Courses";
// keep a user object with mentioned properties and pass down to UserCard as prop

export default function App() {
  const handleFollow = () => {
    alert("hii")
  }

  return <>
    <Title />
    <UserCard handle={handleFollow} />
    <Courses  />

  </>;

}
