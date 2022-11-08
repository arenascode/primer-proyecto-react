import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ItemListContainer = () => {


  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true)
 
     useEffect(() => {
      getProducts()
     }, []);
  

  const LoadingProducts = () => {
  
    return (

      <h1 className="text-xl text-white">Loading Products...</h1>
    )
  }

  // Si quiero hacer un return implicito de un objeto debo envolverlo en parentesis para que no marque error.

  const getProducts = () => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    getDocs(productsCollection).then((res) => {
      const productsFb = res.docs.map((d) => ({ id: d.id, ...d.data() }));
      console.log(productsFb);
      setProducts(productsFb);
      setLoadingProducts(false)
    });
  };

  return (
    <>
      {loadingProducts ? <LoadingProducts/> : products.map((i) => (
        <ProductCard key={i.id} {...i} />
      )) }
    </>
  );
};
export default ItemListContainer;
