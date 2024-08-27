import {Card,Row,Form,Col} from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
    const cart = useContext(CartContext);
    const prodQuan = cart.getProductQuantity(product.id);
    const navigate = useNavigate();

    const redirectToStore = (id) => {
        navigate(`/product/${id}`);
      };

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
                                <button className="button" onClick={()=>cart.removeOneFromCart(product.id)}>-</button>
                                <button className="button" onClick={()=>cart.addOneToCart(product.id)}>+</button>
                            </Col>
                        </Form>
                        <button className="button" onClick={()=>cart.deleteFromCart(product.id)}>Remove From Cart</button>
                    </> 
                    :
                    // <button className="button" onClick={()=>cart.addOneToCart(product.id)}>Add to cart</button>
                    <button className="button" onClick= {() => redirectToStore(product.id)}>View Product</button>
                }
                
            </Card.Body>
        </Card>
    )
}

export default ProductCard;