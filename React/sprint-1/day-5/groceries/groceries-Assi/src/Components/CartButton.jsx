import React from "react";

const CartButton = () => {
  return <div  className="change_quantity_container">
    <button data-cy="inc_btn" >+</button>
    <button data-cy="dec_btn" >-</button>
    <p className="quantity">quantity</p>

  </div>;
};

export default CartButton;
