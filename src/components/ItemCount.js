import { useState } from "react";
import {ItemDetail} from "./ItemDetail";

const ItemCount = ({ item }) => {

  const [counter, setCounter] = useState(1)
  const [addCart, setAddCart] = useState([])

  const addToCartDisable = document.getElementById("btnAddToCart");
  

  if (counter <= 0) {
    addToCartDisable.setAttribute("disabled", "disabled");
  } else {
    console.log("don't disabled nothing");
  }


  const clickHandlerAdd = () => {
    console.log('Clicked add');
    if (counter < item.stock) {
      setCounter(counter + 1)
      addToCartDisable.removeAttribute("disabled")

    } else {
      alert('Superaste el limite de stock disponible');
    }
  }
  const clickHandlerLess = () => {
    console.log('Clicked Subtract');
    if (counter >= 1) {
      setCounter(counter - 1)
    } else {
      
      console.log('No puedes restar cantidades negativas');
    }
  }
  
  const addToCart = () => {
    if (counter >= 1) {
      console.log("añadite un item al carrito");
      setAddCart(counter)
      console.log(addCart);
    } else {
      console.log("don't do anything");
    }
    setCounter(0)
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
        <button id='btnAddToCart' onClick={addToCart} className="btn btn-xs justify-center">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount