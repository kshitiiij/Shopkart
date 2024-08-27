import Nav from "./Components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cancel from "./Pages/Cancel";
import Success from "./Pages/Success";
import Store from "./Pages/Store";
import CartProvider from "./CartContext";
import Product from "./Pages/Product";

function App() {
  return (
    <div className="home">
      <CartProvider>
          <Nav/>
          <BrowserRouter>
            <Routes>
              <Route index path="/" element = {<Store/>} />
              <Route path="/success" element = {<Success/>} />
              <Route path="/cancel" element = {<Cancel/>} /> 
              <Route path="/product/:id" element = {<Product/>} /> 
            </Routes>
          </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
