import { Link } from "react-router-dom";
import FormFooter from "./FormFooter.js";

const Hero = () => {

  const style = {
    width: "100%",
    height: "100%",
    backgroundImage: `url("./adaptogenosLogo.jpeg")`,
    backgroundColor: "#130c08c8",
  };

  return (
    <>
      <div
      className="hero min-h-screen"
      style={style}>
      <div className="hero-overlay"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-10 text-5xl font-bold description">Welcome to your Adaptogen Store</h1>
          <hr />
          <p className="mb-8 mt-8 text-xl">
            Potencia tu mente y cuerpo con ayuda de la naturaleza.
          </p>
          <Link to={'/catalogo'} className="btn btn-sm btn-warning text-lg mt-8"> Ver Productos</Link>
        </div>
      </div>
      </div>
      <FormFooter/>
    </>

  );
};
export default Hero;