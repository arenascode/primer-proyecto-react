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
          <div className="flex items-center lg:space-x-3 text-black">
            
            <div className="p-2 md:p-4 lg:w-32">
              <div className="avatar flex">
              <div className="mask mask-squircle lg:w-11/12 h-12 ml-3 lg:ml-1">
                <img src={p.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
              <div className="font-bold text-center text-sm lg:text-lg">{p.name}</div>
              <div className="text-sm text-center opacity-50">{[p.especie]}</div>
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
