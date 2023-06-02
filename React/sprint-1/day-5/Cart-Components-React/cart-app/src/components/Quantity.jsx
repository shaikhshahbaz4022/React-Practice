import Button from "./Button"

function Quantity({ quantity }) {

    return <div>
        <p>QTY :-  {quantity}</p>
        
        <Button text="-" />
        <Button text="+" />
    </div>
}
export default Quantity  