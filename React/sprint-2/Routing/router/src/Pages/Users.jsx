import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Users() {
  const [res, setRes] = useState({});
  const [loader, setloader] = useState(false);
  const [err, seterr] = useState(false);
  const { isAuth } = useContext(AuthContext);

  function getdata(url) {
    return fetch(url).then((res) => res.json());
  }
  async function displayData() {
    try {
      setloader(true);
      let data = await getdata(`https://reqres.in/api/users`);
      console.log(data);
      setloader(false);
      setRes(data);
    } catch (error) {
      console.log(error);
      seterr(true);
      setloader(false);
    }
  }

  useEffect(() => {
    displayData();
  }, []);

  if (!isAuth) {
    return <Navigate to={"/Login"} />;
  }
  if (loader) {
    return <h1>Loading...</h1>;
  }
  if (err) {
    return <h1>Error....</h1>;
  }
  return (
    <>
      {res?.data?.map((ele) => {
        return (
          <div
            key={ele.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
              backgroundColor: "mintcream",
            }}
          >
            <p>{ele.first_name}</p>
            <p>{ele.email}</p>
            <Link to={`/Users/${ele.id}`}>See More</Link>
          </div>
        );
      })}
    </>
  );
}
export default Users;
