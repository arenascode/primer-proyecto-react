import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
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
      console.log(response);
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
    <div>
      {items.map((i) => (
        <ItemDetail key={i.id} {...i} />
      ))}
    </div>
  );
};
export default ItemListContainer;
