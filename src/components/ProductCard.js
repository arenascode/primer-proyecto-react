import { Link } from "react-router-dom";

const ProductCard = ({ id, name, img, description }) => {

  return (
      <div className="card  w-44 glass">
        <figure className="h-38">
          <img src={img} alt="car!" />
        </figure>
        <div className="card-body p-2">
          <h2 className="card-title text-center">{name}</h2>
          <p className="text-sm text-justify w-full h-full">{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/catalogo/product/${id}`}>
              <button className="btn btn-xs">Ver Más</button>
            </Link>
          </div>
        </div>
      </div>

  );
};
export default ProductCard;
