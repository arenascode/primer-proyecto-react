import { useContext } from "react"
import { useCart } from "./context/CartContext"
import ItemCart from "./itemCart"

const Cart = () => {

 const  {cartList, removeList, count } = useCart()

  // console.log(cartList);

  return (
    <div>
      Cart
        <div className="overflow-x-auto w-min">
          <table className="table w-min">
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
              {cartList.map((p) => (
                
                  <ItemCart key={p.id} {...p} />
                
              ))}
              {/* <!-- row 2 --> */}
            </tbody>
          </table>
        </div>
    </div>
  );
}
export default Cart