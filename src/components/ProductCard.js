import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { products } from "./Products";

const ProductCard = ({ id, name, especie, precio, cantidad, img, Description, stock }) => {
  return (
    <div className="flex-inline">
      <div className="card w-80 glass">
        <figure>
          <img src={img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-sm">{Description}</p>
          <div className="card-actions justify-end">
            <Link to={`/catalogo/product/${id}`}>
              <button className="btn btn-xs">Ver Más</button>
            </Link>
            <Link className="ml-5">
              <button className="btn btn-xs">Agregar al Carrito</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
