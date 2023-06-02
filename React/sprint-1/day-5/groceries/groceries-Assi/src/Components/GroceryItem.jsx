import React from "react";
import CartButton from "./CartButton";



const GroceryItem = ({ name, img, price }) => {
  // recive name, image, and price as props

  return <div style={{width:"50%"}} className="grocery_card">
    <img style={{width:"50%"}} src={img} alt={name} />
    <h3>{name}</h3>
    <h5>{price}</h5>
    <CartButton   />

  </div>;
};

export default GroceryItem;
