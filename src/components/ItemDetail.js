import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { products } from "./Products";

const ProductDetail = ({ item }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={item.img}
          className="max-w-sm rounded-lg shadow-2xl"
        alt=""/>
        <div>
          <h1 className="text-5xl font-bold">{item.name}</h1>
          <p className="py-6">
            {item.Description}
          </p>
          <button className="btn">Comprar</button>
        </div>
      </div>
    </div>
  );
}

const ItemDetail = () => {

  const { id: itemId } = useParams()

  const [item, setItem] = useState([])

  console.log(useParams(itemId));

  useEffect(() => {
    getItemDetail().then(response => {
      console.log(response)
      setItem(response)
    })
  }, [])

  const getItemDetail = () => {
    return new Promise((resolve) => {
      setTimeout(() =>
      resolve(products.find(p => p.id == itemId)), 1000)
      
    })
  }
  

  return (
    <div>
      <div>
        <ProductDetail item={item} />
      </div>
    </div>
  );
}
export default ItemDetail