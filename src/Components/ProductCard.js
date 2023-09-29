import {Card,Row,Form,Col} from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";

const ProductCard = ({product}) => {
    // const product = props.product;
    const cart = useContext(CartContext);
    const prodQuan = cart.getProductQuantity(product.id);
    // console.log(prodQuan);
    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Rs. {product.price}</Card.Text>
                { prodQuan > 0 ? 
                    <>
                        <Form as={Row}>
                            <Form.Label coloumn="true" sm="6">In Cart: {prodQuan}</Form.Label>
                            <Col sm="6">
                                <button className="button" onClick={()=>cart.addOneToCart(product.id)}>+</button>
                                <button className="button" onClick={()=>cart.removeOneFromCart(product.id)}>-</button>
                            </Col>
                        </Form>
                        <button className="button" onClick={()=>cart.deleteFromCart(product.id)}>Remove From Cart</button>
                    </> 
                    :
                    <button className="button" onClick={()=>cart.addOneToCart(product.id)}>Add to cart</button>
                }
                
            </Card.Body>
        </Card>
    )
}

export default ProductCard;