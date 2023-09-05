import { useCart } from "./context/CartContext";
const ProductCart = ({ p }) => {

  const { deleteItem } = useCart();
  
  const deleteProductCart = (p) => {
    deleteItem(p.target.id);
    console.log(p);
  };

  return (
    <>
      <tr>
        <td className="productTableCart">
          <div className="flex items-center lg:space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle ml-2 lg:w-12 h-12">
                <img src={p.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div className="p-2 md:p-4">
              <div className="font-bold">{p.name}</div>
              <div className="text-sm opacity-50">{[p.especie]}</div>
            </div>
          </div>
        </td>
        <td className="pl-8 lg:p-7">{p.quantity}</td>
        <td>${p.precio}</td>
        <td className="font-bold">{p.quantity * p.precio}</td>
        <td className="font-bold ml-2 min-w">
          <button
            id={p.id}
            onClick={deleteProductCart}
            className="btn btn-xs rounded-full ml-4"
          >
            X
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProductCart;
