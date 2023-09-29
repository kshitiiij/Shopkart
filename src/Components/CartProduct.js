import { useContext } from "react";
import { CartContext } from "../CartContext";
import { getData } from "../Product";

const CartProduct = ({id,quantity}) => {
    const cart = useContext(CartContext);
    const productData = getData(id);

    return (
        <>
            <h3>{productData.title}</h3>
            <p>No. {quantity}</p>
            <p>Rs {productData.price * quantity}</p>
            <button className="button" onClick = {()=>cart.deleteFromCart(productData.id)}>Remove</button>
            <hr></hr>
        </>
    )

}

export default CartProduct;