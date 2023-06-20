import React, { useState } from "react";
import SearchResults from "./SearchResults";

export const fetchData = async () => {
  // make fetch request to the mentioned api and return the result here

  return await fetch("https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights")
    .then((res) => res.json())



};


function FlightSearch() {
  // on page load fetch the data (useEffect)
  let [data, setData] = useState([])
  let [inputSourceVal, setSourceVal] = useState("")
  let [inputDestValue, setDestVal] = useState("")
  let [searchreasult, SetSearchresults] = useState([])


  fetchData()
    .then((res) => {
      // console.log(res);
      setData(res)
    })
    .catch((err) => {
      console.log(err);
    })


  const handleSearch = () => {
    // filter the data based on source and destination

    let filtereddata = data.filter((ele) => {
      return (
        ele.departure_from.toLowerCase() == inputSourceVal.toLowerCase() && ele.arrival_at.toLowerCase() == inputDestValue.toLowerCase()

      )
    })


    SetSearchresults(filtereddata)

  }
  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input data-testid="source-input" placeholder="Source"
            value={inputSourceVal}
            onChange={(e) => setSourceVal(e.target.value)}

          />
          <br /> <br />
          <input data-testid="destination-input" placeholder="Destination"
            value={inputDestValue}
            onChange={(e) => setDestVal(e.target.value)}
          />
          <br /> <br />
          <button data-testid="search-button" onClick={handleSearch} >Search</button>
        </section>
      </div>
      {/* if there are search results pass it to SearchResults component else print No Flights found  */
      searchreasult.length>0 ? <SearchResults resu={searchreasult}/> : (<p>No result Found</p> )
      }
      <div data-testid="no-flights" className="">
        No Flights Found
      </div>
    </div>
  );
}

export default FlightSearch;
