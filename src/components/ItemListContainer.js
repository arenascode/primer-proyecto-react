import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "./Products";

const ItemListContainer = () => {


  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setItems(response);
    });
  }, []);

  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };

  return (
    <>
      {items.map((i) => (
        <ProductCard key={i.id} {...i} />
      ))}
    </>
  );
};
export default ItemListContainer;
