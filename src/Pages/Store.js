import {Row,Col} from "react-bootstrap";
import {Products} from "../Product";
import ProductCard from "../Components/ProductCard";

const Store = () => {
    return (
        <div >
            <Row xs={1} md={3}>
                {Products.map((product,index) => (
                    <Col align="centre" key = {index}>
                        <ProductCard product = {product} />
                    </Col>
                ))}
            </Row>
        </div>
        
    )
}

export default Store;