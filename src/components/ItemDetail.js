import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import ItemCount from "./ItemCount";
// import { products } from "./Products";

const ProductDetail = ({ item }) => {
  
  return (
    <div className="containerProductDetail bg-grey-900 glass flex-1">
      <div className="flex productDetail">
        <div className=" photoandBuyDetails mt-8 flex flex-col place-content-center bg-#78716c lg:flex-row">
          {/* Container buy, stock, addCart info */}
          <div className=" productPhoto overflow-hidden rounded-t-lg lg:block w-10/12 flex ml-12">
            <img
              src={item.img}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="buyDetails artboard artboard-vertical ml-12 bg-#78716c glass w-10/12 text-white">
            <h1 className="font-bold tracking-normal text-2xl mt-3 text-justify ml-3 ">
              {item.name}
            </h1>
            <nav aria-label="Breadcrumb">
              <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <li>
                  <div className="flex items-center">
                    <Link
                      to={"/catalogo"}
                      className="mr-2 text-sm font-medium text-white"
                    >
                      Catálogo
                    </Link>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-4"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>

                <li>
                  <div className="flex items-center">
                    <Link className="mr-2 text-sm font-medium text-white-900">
                      Adaptogenos
                    </Link>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>

                <li className="text-sm">
                  <Link
                    to={"/catalogo/product/:id"}
                    href="#"
                    aria-current="page"
                    className="font-medium text-white-500 hover:text-gray-600"
                  >
                    {item.name}
                  </Link>
                </li>
              </ol>
            </nav>
            <h2 className="price text-lg mt-3 ml-3 ">Precio: ${item.precio}</h2>
            <h2 className="price text-lg mt-3 ml-3 ">
              Especie: {item.especie}
            </h2>
            <h2 className="price text-lg mt-3 ml-3 ">
              Cantidad: Pack por {item.cantidad}
            </h2>
            <div className=" relative cardActions flex-column flex-center m-5">
              <ItemCount item={item} />
              <p className="mt-3">Stock: {item.stock} Unidades</p>
              <div className="cardButtons flex flex-grow mb-3">
                {/* Add to cart */}
                <Link to={"/cart"}>
                  <button className="btn btn-xs btn-success justify-end mt-3">
                    Ir al Carrito
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Info  */}
      <div className="productDescription ml-12 w-10/12 flex flex-col bg-#78716c glass text-white rounded-b-lg lg:flex-row">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 content-center">
          <h1 className=" font-bold tracking-normal text-white-900  text-2xl mt-4 ml-8 text-start">
            ¿Qué es?
          </h1>
          <div className="space-y-6">
            <p className="text-lg text-justify text-white w-80 ml-10 mt-4 tracking-wide">
              {item.description}
            </p>
          </div>
        </div>

        <div className="properties ml-8 lg:border-r lg:border-gray-200">
          <h1 className="font-bold tracking-normal text-2xl mt-8 text-start">
            Propiedades
          </h1>

          <div className="font-medium text-justify  w-80 mt-9 tracking-wide">
            <ul className="list-disc space-y-3 pl-4 text-m">
              <li className="">
                <span className="font-medium text-justify  w-80 mt-9 tracking-wide">
                  {item.prop1}
                </span>
              </li>

              <li className="prop1">
                <span className="">{item.prop2}</span>
              </li>

              <li className="">
                <span className="">{item.prop3}</span>
              </li>

              <li className="">
                <span className="">{item.prop4}</span>
              </li>
              <li className="">
                <span className="">{item.prop5}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="recomendedUse ml-8 w-80 text-justify mb-8">
          <h1 className="font-bold tracking-normal text-2xl m-auto mt-8 text-start">
            ¿Cómo se usa?
          </h1>

          <div className="mt-4 space-y-6">
            <p className="font-medium text-justify w-80 mt-9 tracking-wide">
              {item.uso}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const ItemDetail = () => {

  const { id: itemId } = useParams()

  const [item, setItem] = useState([])
  const [loadingProduct, setLoadingProduct] = useState(true)
  // console.log(useParams(itemId));

  useEffect(() => {
    getItemDetail()
  }, [])

  const getItemDetail = () => {
    
    const db = getFirestore()
    const productsCollection = collection(db, "products")
    getDocs(productsCollection).then((snapshot) => {
      const productsFb = snapshot.docs.map((i) => ({id: i.id, ...i.data()}))
      console.log(productsFb);
      let productFb = productsFb.find(p => p.id == itemId)
      console.log(productFb);
      setItem(productFb)
      setLoadingProduct(false)
      })
    }

    const LoadingProduct = () => {
  
    return (
      <div className="h-screen flex m-auto bg-#78716c glass">
        <h1 className="text-2xl text-white m-auto">Loading Product...</h1>
      </div>
    );
    }
  
  return (
    <div className="bg-#78716c">
      {loadingProduct ? <LoadingProduct /> : <ProductDetail item={item} />}
    </div>
  );
}
export default ItemDetail