import { Link } from "react-router-dom";

const ProductCard = ({ id, name, img, description }) => {

  return (
    <div className="flex-inline ml-10">
      <div className="card w-80 glass">
        <figure>
          <img src={img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-sm text-justify">{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/catalogo/product/${id}`}>
              <button className="btn btn-xs">Ver Más</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
