import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./components/Catalogo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Hero />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
      </BrowserRouter>
      {/* <ItemCount /> */}
    </div>
  );
}

export default App;
