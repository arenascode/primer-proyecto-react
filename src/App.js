import "./App.scss";
import NavBar from "./components/Base/NavBar";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./components/Catalogo";
import ItemDetail from "./components/ItemDetail"
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context/CartContext"
import Cart from "./components/Cart";
import BuyForm from "./components/BuyForm";

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<Hero />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path={"/catalogo/product/:id"} element={<ItemDetail />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/cart/order"} element={<BuyForm/>} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
