import "./App.scss";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./components/Catalogo";
import ItemDetail from "./components/ItemDetail"
import Error404 from "./components/Error404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Hero />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path={'/catalogo/product/:id'} element={<ItemDetail />} />
          <Route path={'*'} element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
      {/* <ItemCount /> */}
    </div>
  );
}

export default App;
