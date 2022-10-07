import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "./Products";

const ItemListContainer = () => {
  const styles = {
    padding: "5px",
    color: "brown",
    textAlign: "center",
  };

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
      }, 2000);
    });
  };

  return (
    <div className="itemList">
      {items.map((i) => (
        <ProductCard key={i.id} {...i} />
      ))}
    </div>
  );
};
export default ItemListContainer;
