import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserSinglePage() {
  const { userID } = useParams();
  const [res, setRes] = useState({});
  const [loader, setloader] = useState(false);
  const [err, seterr] = useState(false);
  const { data, support } = res;
  function getdata(url) {
    return fetch(url).then((res) => res.json());
  }
  async function displayData(id) {
    try {
      setloader(true);
      let data = await getdata(`https://reqres.in/api/users/${id}`);
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
    displayData(userID);
  }, [userID]);

  if (loader) {
    return <h1>Loading...</h1>;
  }
  if (err) {
    return <h1>Error....</h1>;
  }
  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid black" }}>
      <img src={data?.avatar} alt={data?.first_name} />
      <h2>
        {data?.first_name} {data?.last_name}
      </h2>
      <p>{data?.email}</p>
      <hr />
      <p>{support?.url}</p>
      <p>{support?.text}</p>
    </div>
  );
}
export default UserSinglePage;
