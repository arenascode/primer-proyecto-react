import { useState } from "react";
import {ItemDetail} from "./ItemDetail";

const ItemCount = ({ item }) => {

  const [counter, setcounter] = useState(1)
  
  const clickHandlerAdd = () => {
    console.log('Clicked add');
    if (counter < item.stock) {
      setcounter(counter + 1)
    } else {
      alert('Superaste el limite de stock disponible');
    }
  }
  const clickHandlerLess = () => {
    console.log('Clicked Subtract');
    if (counter >= 1) {
      setcounter(counter - 1)
    } else {
      console.log('No puedes restar cantidades negativas');
    }
  }
  
  const addToCart = () => {
  console.log("Esto debería agregar los productos al carrito");
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
        <button onClick={addToCart} className="btn btn-xs justify-center">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount