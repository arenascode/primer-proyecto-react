import { useState } from "react";
import { useCart } from "./context/CartContext";

const ItemCount = ({ item }) => {

  const [counter, setCounter] = useState(1)
  const {addToCart} = useCart()

  const addToCartDisable = document.getElementById("btnAddToCart");
  

  counter <= 0 && addToCartDisable.setAttribute("disabled", "disabled") 



  const clickHandlerAdd = () => {

    if (counter < item.stock) {
      setCounter(counter + 1)
    } else {
      alert('Superaste el limite de stock disponible');
    }
  }
  const clickHandlerLess = () => {
    
    if (counter >= 1) {
      setCounter(counter - 1)
    } else {
      alert('No puedes restar cantidades negativas');
    }
  }
  
  const addHandler = () => {

    addToCart(item, counter)
  
  }

  return (
    <div className=" itemCountContainer flex flex-center">
      <div className="flex itemCount justify-center border border-amber-800">
        <button
          className="btn btn-xs m-1 rounded-full"
          onClick={clickHandlerLess}
        >
          -
        </button>
        <div className="m-1">{counter}</div>
        <button
          className="btn btn-xs m-1 rounded-full"
          onClick={clickHandlerAdd}
        >
          +
        </button>
      </div>
      <div className="addToCart">
        <button id='btnAddToCart' onClick={addHandler} className="btn btn-xs justify-center">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount