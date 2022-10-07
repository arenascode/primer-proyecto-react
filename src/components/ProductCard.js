import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ProductCard = ({ id, name, especie, precio, cantidad, img }) => {
  return (
    <Link to={`/catalogo/product/${id}`}>
      <div className="flex-inline">
        <div className="card w-96 glass">
          <figure>
            <img src={img} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <ItemCount />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
