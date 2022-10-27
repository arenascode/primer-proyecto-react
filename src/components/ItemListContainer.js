import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "./Products";

const ItemListContainer = () => {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    getDocs(productsCollection).then((res) => {
      const productsFb = res.docs.map((d) => d.data());
      console.log(productsFb);
      setProducts(productsFb);
    });
  };

  return (
    <>
      {products.map((i) => (
        <ProductCard key={i.id} {...i} />
      ))}
    </>
  );
};
export default ItemListContainer;
