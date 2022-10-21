import { createContext, useContext, useState } from "react";


const CartContext = createContext({
  cartList: [],
  addToCart: () => { },
  removeList: () => { },
  count: 0,
});

export const useCart = () => {
  return useContext(CartContext);
};
const CartContextProvider = ({ children }) => {
  
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
   setCartList(cartList => cartList.concat(item))
  }

  const removeList = () => {
  setCartList([])
  }

  const deleteItem = (id) => {

  }

  const context = {
    cartList: cartList,
    addToCart: addToCart,
    removeList: removeList,
    deleteItem: deleteItem,
    count: cartList.length
  }

  return (
    <CartContext.Provider value={ context }>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;