import { useContext } from "react"
import { useCart } from "./context/CartContext"
import ItemCart from "./itemCart"

const Cart = () => {

 const  {cartList, removeList, counter, getTotal, subtotal, cartQty } = useCart()

let deliveryCost = 600

  const addHandler = () => {
  removeList()
  }
 
  return (
    <div className="flex gap-2 relative">
      <div className="overflow-x-auto w-min CartList border-2 m-5">
        <h1 className="text-center">
          <strong>Contenido de tu Carrito</strong>
        </h1>
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
      <div className="buyDetails border-2 m-5 w-72 bg-stone-100 h-min sticky top-0">
        <div className="buyDetailsTitle bg-stone-200 mt-0">
          <h1 className="text-center h-10 pt-2">
            <strong>Detalle de tu Compra</strong>
          </h1>
        </div>
        <hr />
        <div className="flex flex-col gap-2 p-2">
          <h2>
            <strong>Items: </strong> {cartQty()}
          </h2>
          <h2>
            <strong>Subtotal: </strong>
            {getTotal()}{" "}
          </h2>
          <h2>
            <strong>Envío:</strong> {deliveryCost}
          </h2>
        </div>
        <div className="total bg-stone-200 border-t-2 border-slate-400">
          <strong className=" p-3 pt-4">
            Total: {getTotal() + deliveryCost}
          </strong>
        </div>
        <div className="checkOutActions flex gap-2">
          <button onClick={addHandler} className="btn btn-xs mt-2">Vaciar Carrito</button>
          <button className="btn btn-xs mt-2">Confirmar Compra</button>
        </div>
      </div>
    </div>
  );
}
export default Cart