import ItemCount from "./ItemCount";

const ItemDetail = ({id, name, especie, precio, cantidad, img}) => {
  return (
    <div className="flex-inline">
      <div className="card w-96 glass">
        <figure>
          <img src={img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <ItemCount/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemDetail
