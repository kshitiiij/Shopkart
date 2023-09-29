import Nav from "./Components/Nav";
import {Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cancel from "./Pages/Cancel";
import Success from "./Pages/Success";
import Store from "./Pages/Store";
import CartProvider from "./CartContext";

function App() {
  return (
    <div className="home">
      <CartProvider>
        <Container>
          <Nav/>
          <BrowserRouter>
            <Routes>
              <Route index element = {<Store/>} />
              <Route path="success" element = {<Success/>} />
              <Route path="cancel" element = {<Cancel/>} />
            </Routes>
          </BrowserRouter>
        </Container>
      </CartProvider>
    </div>
  );
}

export default App;
