import { useState } from 'react';
import './App.css';
import CartItems from './components/CartItems';
import Total from './components/Total';

const cartItems = [
  { id: 1, label: "Noodles", price: 30, quantity: 1 },
  { id: 2, label: "Burger", price: 20, quantity: 1 },
  { id: 3, label: "Dosa", price: 25, quantity: 1 }
]



function CartContainer() {
  let [cart, setCart] = useState(cartItems)

  function Quantityhandle(id, val) {
    let UpdatedQuantity = cart.map((ele) => (


      ele.id === id
        ? {
          ...ele,
          quantity: ele.quantity + val
        } 
        : ele

    ))
    setCart(UpdatedQuantity)
  }


  const TotalDisplay =  cart.reduce((acc,cur)=> acc + cur.price * cur.quantity ,0)


  return (
    <div className="App">
      <h1>Add To Cart</h1>
            {
        cart.map((ele) => (

          <CartItems  Quantityhandle={Quantityhandle} key={ele.id} {...ele} />
        ))
      }
      <Total TotalDisplay={TotalDisplay} />
    </div>
  );
}

export default CartContainer;
