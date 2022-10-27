import {useEffect, useState} from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore"

const ListContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    const db = getFirestore()
    const productsCollection = collection(db, "products")
    getDocs(productsCollection).then(res => {
      const productsFb = res.docs.map(d => d.data())
      console.log(productsFb);
      setProducts(productsFb)
    })
  };

  return (
    <div> ListContainer </div>
  )
}
export default ListContainer