import { useContext } from "react"
import { useCart } from "./context/CartContext"
import ItemCart from "./itemCart"

const Cart = () => {

 const  {cartList, removeList, counter } = useCart()

  // console.log(cartList);

  const subTotal = (cartList) => {
  cartList.map()
  }


  return (
    <div className="flex gap-2">
      <div className="overflow-x-auto w-min CartList border-2 m-3">
        <h1 className="text-center">Contenido de tu Carrito</h1>
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
              <ItemCart key={p.id} p={p} />
            ))}
            {/* <!-- row 2 --> */}
          </tbody>
        </table>
      </div>
      <div className="buyDetails border-2 m-3">
        <h1 className="text-center">Buy Details</h1>
        <h2>Items: {counter}</h2>
        <h2>Subtotal: </h2>
        <hr/>
      </div>
    </div>
  );
}
export default Cart