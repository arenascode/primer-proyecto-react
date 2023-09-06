import {  useEffect, useState } from "react"
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
  
  // useEffect(() => { 
  // toEnableButton()
  // }, [])

  const CartEmpty = () => {
    
    return (
      <div className="bg-stone-800 h-screen glass hover:bg-stone-800 pt-28">
        <div className="card w-96 bg-base-100 shadow-xl lg:mt-28 lg:ml-96 m-auto">
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
      </div>
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
  const toEnableButton = () => {
    const checkoutBtn = document.getElementById("checkoutBtn");
  
    if (disabledBtn) {
      console.log('Dont disabled button');
      checkoutBtn.setAttribute('disabled', '');
    } else {
      checkoutBtn.removeAttribute("disabled", "disabled");
      console.log('disabled button');
    }
  }

  return (
    <>
      {cartList.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className="lg:flex gap-2 relative cartContainer h-screen p-2 text-black">
          <div className="desktop w-max CartList pt-10 hidden lg:block ">
            <table className=" bg-stone-100 rounded-lg">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th className="p-4">Producto</th>
                  <th className="p-1 pr-8">Cantidad</th>
                  <th className="p-1 pr-8">Precio</th>
                  <th className="pr-8">Total</th>
                  <th className="pr-6">Borrar</th>
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
          {/* Cart details for MoBile Design */}
          <div className="mobile lg:hidden CartList pt-10">
            <table className=" bg-stone-100 w-12/12 lg:w-min rounded-lg">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th className="p-1">Producto</th>
                  <th className="p-1 pr-4">Cantidad</th>
                  <th className="p-1 pr-4">Precio</th>
                  <th className="pr-4">Total</th>
                  <th className="pr-2">Borrar</th>
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
          <div className="buyDetailsandForm border-2 m-auto mt-10 bg-stone-100 h-min sticky top-0 md:flex gap-2 p-3 rounded-lg w-full">
            <div className="buyDetails w-12/12 lg:w-72">
              <div className="buyDetailsTitle bg-stone-200 mt-0 p-2 rounded-md">
                <h1 className="text-center text-lg h-10 pt-2">
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
              <div className="total bg-stone-200 border-t-2 border-slate-400 h-8 mt-2">
                <strong className=" p-2 pt-4 text-lg">
                  Total: {getTotal() + deliveryCost}
                </strong>
              </div>
              <div className="checkOutActions flex gap-2 justify-end">
                <button onClick={deleteList} className="btn btn-sm btn-outline btn-error mt-4 ">
                  Vaciar Carrito
                </button>
              </div>
            </div>
            <div className="buyForm W-50 p-2 mt-2">
              <div className="border formCheckout">
                <BuyForm
                  setBuyer={setBuyer}
                  setDisabledBtn={setDisabledBtn}
                  buyer={buyer}
                />
              </div>
              <div className="sendOrderButton mt-5 flex justify-end">
                <button
                  id="checkoutBtn"
                  className="btn btn-sm btn-success"
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