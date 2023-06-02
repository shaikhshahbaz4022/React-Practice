import LabelPrice from "./LabelPrice"
import Quantity from "./Quantity"

function CartItems({ id, label, price, quantity, Quantityhandle}) {
    return (
        <div style={{
            margin: "auto",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"

        }}>
            <LabelPrice label={label} price={price} />
            <Quantity  id={id} Quantityhandle={Quantityhandle} quantity={quantity} />
        </div>
    )
}
export default CartItems