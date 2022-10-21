import { useContext } from "react"
import { useCart } from "./context/CartContext"

const Cart = () => {

 const  {cartList, removeList, count } = useCart()

  console.log(cartList);

  return (
    <div>
      Cart
      {cartList.map((p) => (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
                <th> borrar </th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={p.img} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{p.name}</div>
                      <div className="text-sm opacity-50">{[p.especie]}</div>
                    </div>
                  </div>
                </td>
                <td>
                  A Codificar
                </td>
                <td>${p.Precio}</td>
                <td className="font-bold">a codificar</td>
              </tr>
              {/* <!-- row 2 --> */}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
export default Cart