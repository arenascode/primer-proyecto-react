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
      <div className="h-screen flex m-auto">
        <h1 className="text-2xl text-white m-auto">Loading Products...</h1>
      </div>
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

  const listOfProducts =
    products.map((i) => (
        <ProductCard key={i.id} {...i} />
      ))
  return (
    <>
      {loadingProducts ? <LoadingProducts /> :
        <div className="flex flex-wrap gap-11 lg:gap-16 place-content-center p-2">
          {listOfProducts}
        </div>
      }
    </>
  );
};
export default ItemListContainer;
