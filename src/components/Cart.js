import {  useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "./context/CartContext"
import ItemCart from "./itemCart"
import BuyForm from "./BuyForm"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import Swal from "sweetalert2"
import 'animate.css'

const Cart = () => {
  
  let deliveryCost = 600
 
 const  {cartList, removeList, getTotal, cartQty, setCartList } = useCart()

  const [buyer, setBuyer] = useState({})
  const [disabledBtn, setDisabledBtn] = useState(true)
  

  const CartEmpty = () => {
    
    return (
      <>
        <div className="card w-96 bg-base-100 shadow-xl mt-28 ml-96">
          <figure className="px-10 pt-10">
            {/* <img
            src=""
            className="rounded-xl"
          /> */}
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Tu carrito está vacio!</h2>
            <p>
              Te invitamos a conocer estas herramientas para potenciar tu salud
              en nuestro catálogo
            </p>
            <div className="card-actions">
              <Link to={"/catalogo"}>
                <button className="btn btn-success btn-xs">Ir</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
   }
// Send Order to FB
  const sendOrder = () => {
  
  const order = {
    buyer: buyer,
    products: cartList,
    subtotal: getTotal(),
    delivery: 600,
  };
    
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  addDoc(ordersCollection, order).then(() => {
    setCartList([]);
  });
    Swal.fire({
      text: "Muchas gracias por tu compra. Te estaremos contactando en breve!",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    console.log('Order Send');
    setDisabledBtn(true)
};

 //Delete List of items 
  const deleteList = () => {
  removeList()
  }
   
  // Enable Checkout Button
  
  if (disabledBtn) {
    console.log('Dont disabled button');
  } else {
      const checkoutBtn = document.getElementById("checkoutBtn");
      checkoutBtn.removeAttribute("disabled", "disabled");
      console.log('disabled button');
  }
    
  return (
    <>
      {cartList.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className="flex gap-2 relative cartContainer h-full">
          <div className=" w-min CartList  m-5 mt-10">
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
          <div className="buyDetailsandForm border-2 m-5 mt-10 w-70 bg-stone-100 h-min sticky top-0 flex gap-2 p-3 rounded-lg">
            <div className="buyDetails w-max p-3">
              <div className="buyDetailsTitle bg-stone-200 mt-0 p-2 rounded-md">
                <h1 className="text-center h-10 pt-2 w-max">
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
                  {getTotal()}
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
                <button onClick={deleteList} className="btn btn-xs mt-2">
                  Vaciar Carrito
                </button>
              </div>
            </div>
            <div className="buyForm W-50 p-2 ml-2">
              <div className="border formCheckout">
                <BuyForm
                  setBuyer={setBuyer}
                  setDisabledBtn={setDisabledBtn}
                  buyer={buyer}
                />
              </div>
              <div className="sendOrderButton mt-5">
                <button
                  id="checkoutBtn"
                  className="btn btn-xs btn-success"
                  type="submit"
                  value="enviar"
                  onClick={sendOrder}
                  disabled={disabledBtn}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Cart