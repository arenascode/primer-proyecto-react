import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import useLocalStorage from "../../hooks/useLocalStorage"

const CartContext = createContext({
  cartList: [],
  addToCart: () => { },
  removeList: () => { },
  counter: 0,
  deleteItem: () => { },
  cartQty: () => {},
  getTotal: () => { },
  subtotal: 0,
  setCartList: () => { },
  cartQuantity: 0
});

export const useCart = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  
  const [cartList, setCartList] = useLocalStorage('Products In Cart', []);
  const [cartQuantity, setCartQuantity] = useState(0)

  const addToCart = (item, counter) => {

    // if the user don't choose a quantity
    if (counter == 0) {
      Swal.fire({
        text: "Selecciona una cantidad"
      });
    
    } else {
      // if the product is in the cart
      if (isInCart(item)) {
        const itemFound = cartList.find(p => p.id == item.id)
        itemFound.quantity += counter
      } else {
        item.quantity = counter
        setCartList(cartList => cartList.concat(item))
      }
      item.stock -= counter
      console.log(item);
      cartQty()
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: `Añadiste ${counter} unidades de ${item.name} `,
      });
    }
    }
    
  

  const isInCart = (item) => {
    return cartList.some(p => p.id == item.id)
  }

  const removeList = () => {
    setCartList([])
    
  }

  const deleteItem = (id) => {
    const newArrayCart = cartList.filter((p) => p.id != id)
    setCartList(newArrayCart)
    newArrayCart.reduce((qty, p) => qty + p.quantity, 0);
  }

  let subtotal = 0;

  const getTotal = () => {
   return cartList.reduce((subtotal, i) => subtotal + i.quantity * i.Precio, 0);
 };

  const cartQty = () => {
    const cartQuantity = cartList.reduce((qty, p) => qty + p.quantity, 0); 
    setCartQuantity(cartQuantity)
    return  cartQuantity;
  }

  const context = {
    cartList: cartList,
    addToCart: addToCart,
    removeList: removeList,
    deleteItem: deleteItem,
    counter: cartList.length,
    getTotal: getTotal,
    subtotal: subtotal,
    cartQty: cartQty,
    setCartList: setCartList,
    cartQuantity: cartQuantity
    // cartQuantity: cartList.length
  }
  
  // to enable Checkout Button
  
  

  return (
    <CartContext.Provider value={ context }>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;