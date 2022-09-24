import { useState } from "react";

const ItemCount = () => {

  const styles = {
    border: 'solid 2px grey',
    width: 'min-content',
    marginLeft: '10px',
    marginBottom: '10px'
  }

  const [counter, setcounter] = useState(0)
  
  const clickHandlerAdd = () => {
    console.log('Clicked add');
    if (counter <= 9) {
      setcounter(counter + 1)
    } else {
      console.log('Superaste el limite de stock disponible');
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
    <div className="flex justify-center" style={styles}>
      <button className="btn m-1" onClick={clickHandlerLess}>-</button>
      <div className="m-4">{counter}</div>
      <button className="btn m-1" onClick={clickHandlerAdd}>
        +
      </button>
    </div>
  );
}

export default ItemCount