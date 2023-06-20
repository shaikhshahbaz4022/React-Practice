const SearchResults = (props) => {
  let { searchreasult } = props
  return (
    <table >
      {/* add columnsheadings */}
      <tbody data-testid="flight-results">{
        //  map through the results and display as rows
        searchreasult.map((ele)=>(
          <div>
            <p>{ele.flight_ticket_price}</p>
          </div>
        ))
      }</tbody>
    </table>
  );

};
export default SearchResults;
