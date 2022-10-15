import { useState } from "react";
import {ItemDetail} from "./ItemDetail";

const ItemCount = ({ item }) => {
console.log(item.stock);
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
  
  return (
    <div className="flex itemCount justify-center align">
      <button className="btn btn-xs m-1 rounded-full" onClick={clickHandlerLess}>
        -
      </button>
      <div className="m-4">{counter}</div>
      <button className="btn btn-xs m-1 rounded-full" onClick={clickHandlerAdd}>
        +
      </button>
    </div>
  );
}

export default ItemCount