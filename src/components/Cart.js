import { useContext } from "react"
import { useCart } from "./context/CartContext"

const Cart = () => {

 const  {cartList, removeList, count } = useCart()

  console.log(cartList);

  return (
    <div>
      Cart
      {cartList.map(p => <li>{p.name}</li>)}
    </div>
  )
}
export default Cart