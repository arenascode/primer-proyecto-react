import { createContext, useContext, useState } from "react";
import ItemCount from "../ItemCount";

const CartContext = createContext({
  cartList: [],
  addToCart: () => { },
  removeList: () => { },
  counter: 0,
  deleteItem: () => { }
});

export const useCart = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, counter) => {

    if (isInCart(item)) {
      const itemFound = cartList.find(p => p.id == item.id)
      console.log(counter);
      itemFound.quantity += counter
    } else {
      item.quantity = counter
      setCartList(cartList => cartList.concat(item))
      console.log("acá no lo encontró");
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
    const productToDelete = cartList.findIndex((p) => (p.id == id));
    console.log(productToDelete);
    
    setCartList(cartList.splice(productToDelete, 1))
    
    console.log(cartList);
  }

  const context = {
    cartList: cartList,
    addToCart: addToCart,
    removeList: removeList,
    deleteItem: deleteItem,
    counter: cartList.length
  }

  return (
    <CartContext.Provider value={ context }>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;