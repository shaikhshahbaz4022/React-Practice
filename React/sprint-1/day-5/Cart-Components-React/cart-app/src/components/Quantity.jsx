import Button from "./Button"

function Quantity({ id, quantity, Quantityhandle  }) {


    return <div style={{
        display: "flex",
        alignItems: "center"
    }}>

        <Button onclick={() => Quantityhandle(id, -1)} text="-" />
        <p>QTY :-  {quantity}</p>
        <Button onclick={() => Quantityhandle(id, 1)} text="+" />
    </div>
}
export default Quantity  