import LabelPrice from "./LabelPrice"
import Quantity from "./Quantity"

function CartItems({id,label,price,quantity}) {
    return (
        <div>
            <LabelPrice label={label} price={price} />
            <Quantity quantity={quantity} />
        </div>
    )
}
export default CartItems