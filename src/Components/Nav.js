import {Modal} from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext,useState } from "react";
import CartProduct from "./CartProduct";

const Nav = () => {

    const [show,setShow] = useState(false);
    const cart = useContext(CartContext);
    const prodCount = cart.items.reduce((sum,product) => sum + product.quantity , 0);

    const handleShow = () => {
        setShow(true); }
    const handleClose = () => {
        setShow(false); }

    const checkout = async () => {
        await fetch('https://shopkart.up.railway.app/', {
            method: "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({items : cart.items})
        }).then((response) => {
            console.log("new order sent");
            return response.json();
        }).then((response) => {
            if(response.url){
                window.location.assign(response.url);
            }
        })
    }


    return (
        <div>
            <div className="navbar">
                <h1>Shopkart</h1>
                <button className="collapsible" onClick={handleShow}>Cart {prodCount}</button>
            </div>
            <Modal show = {show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h2>Shopping</h2>
                </Modal.Header >
                <Modal.Body>
                    { prodCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map((item,idx) => (
                                <CartProduct key = {idx} id = {item.id} quantity={item.quantity} ></CartProduct>
                            ))}
                            <h2>Total Cost : {cart.getTotalCost()}Rs</h2>
                            <button className="button" variant="success" onClick={checkout}>Purchase items!</button>
                        </>
                        :
                        <h4>Sorry , there is no item in your cart!</h4>
                    }
                </Modal.Body>
            </Modal>
        </div>
    )
};

export default Nav;