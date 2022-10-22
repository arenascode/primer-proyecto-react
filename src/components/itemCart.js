import { useEffect } from "react";
import { useCart } from "./context/CartContext";


const ProductCart = ({name, especie, Precio}) => {
  
  const { cartList, removeList } = useCart()
  

  
  
  console.log(cartList);
  return (
  <>
    {cartList.map((p) => (
        <tr>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={p.img} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{p.name}</div>
                <div className="text-sm opacity-50">{[p.especie]}</div>
              </div>
            </div>
          </td>
          <td>A Codificar</td>
          <td>${p.Precio}</td>
          <td className="font-bold">a codificar</td>
        </tr>
      ))
    }
    </>
  )
}

export default ProductCart