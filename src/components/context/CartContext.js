import { createContext, useContext, useState } from "react";
import ItemCount from "../ItemCount";

const CartContext = createContext({
  cartList: [],
  addToCart: () => { },
  removeList: () => { },
  counter: 0,
  deleteItem: () => { },
  cartQuantity: 0,
  getTotal: () => { },
  subtotal: 0
});

export const useCart = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, counter) => {

    if (isInCart(item)) {
      const itemFound = cartList.find(p => p.id == item.id)
      console.log(itemFound);
      itemFound.quantity += counter
    } else {
      item.quantity = counter
      setCartList(cartList => cartList.concat(item))
      console.log("Not found it. Has been created");
    } 
    console.log(isInCart(item));
    console.log(cartList);
    }
    
  

  const isInCart = (item) => {
    return cartList.some(p => p.id == item.id)
  }

  const removeList = () => {
  setCartList([])
  }

  const deleteItem = (id) => {
    console.log(id);
    const newArrayCart = cartList.filter((p) => p.id != id)
    console.log(newArrayCart)
    setCartList(newArrayCart)
  }

  let subtotal = 0;
  
  const getTotal = () => {
   return cartList.reduce((subtotal, i) => subtotal + i.quantity * i.Precio, 0);
 };


  const context = {
    cartList: cartList,
    addToCart: addToCart,
    removeList: removeList,
    deleteItem: deleteItem,
    counter: cartList.length,
    getTotal: getTotal,
    subtotal: subtotal,
    // cartQuantity: cartList.length
  }

  return (
    <CartContext.Provider value={ context }>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;