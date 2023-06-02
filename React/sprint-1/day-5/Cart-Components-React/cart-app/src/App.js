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
  let [cart,setCart] = useState(cartItems)
  return (
    <div className="App">
     {
     cart.map((ele)=>(

       <CartItems key={ele.id} {...ele}  />
     ))
     }
      <Total />
    </div>
  );
}

export default CartContainer;
