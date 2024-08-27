import { CartContext } from "../CartContext";
import { useContext } from "react";
import { Products } from "../Product";
import { useParams } from "react-router-dom";
import {Card,Row,Form,Col} from "react-bootstrap";


const Product = () => {
    const {id} = useParams();
    const cart = useContext(CartContext);
    const item = Products.find((product) => product.id === id);
    const prodQuan = cart.getProductQuantity(item.id);

    console.log("products are:",item);
    return (
        <div className="product">
            
            <h2>{item.title}</h2>
            <h4>{item.price}</h4>
            { prodQuan > 0 ? 
                    <>
                        <Form as={Row}>
                            <Form.Label coloumn="true" sm="6">In Cart: {prodQuan}</Form.Label>
                            <Col sm="6">
                                <button className="button" onClick={()=>cart.removeOneFromCart(item.id)}>-</button>
                                <button className="button" onClick={()=>cart.addOneToCart(item.id)}>+</button>
                            </Col>
                        </Form>
                        <button className="button" onClick={()=>cart.deleteFromCart(item.id)}>Remove From Cart</button>
                    </> 
                    :
                    <button className="button" onClick={()=>cart.addOneToCart(item.id)}>Add to cart</button>
                }
        </div>
    );
}

export default Product;