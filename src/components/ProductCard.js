import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ProductCard = ({ id, name, especie, precio, cantidad, img, Description }) => {
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
              <button className="btn">Ver Más</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};
export default ProductCard;
