
import GroceryItem from "./GroceryItem";
import "../Cart.Module.css"
// import GroceryItem from "./GroceryItem";

const Grocerydetails = ({ data }) => {


  return (
    <div  id="css" >
      {/* map data to grocery item use className and data-cy as given in problem description  */
        data.map((ele) => (
          <GroceryItem
          key={ele.id}
            img={ele.image}
            name={ele.name}
            price={ele.price}
            id={ele.id}
          />
        ))
      }
      {/* <GroceryItem /> */}
    </div>
  );
};

export default Grocerydetails;
