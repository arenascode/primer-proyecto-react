import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { useCart } from "./context/CartContext";
import ItemCount from "./ItemCount";
import { products } from "./Products";

const ProductDetail = ({ item }) => {
  
  const { addToCart, cartList, counter} =useCart()
 
  const addHandler = () => {
    addToCart(item, counter);
    console.log(item);
    console.log(cartList);
  };
  return (
    <div className="containerProductDetail flex-1">
      <div className="flex flex-row">
        <div className=" photoandBuyDetails m-10 flex bg-#78716c">
          {/* Container buy, stock, addCart info */}
          <div className=" productPhoto overflow-hidden rounded-lg lg:block h-80 w-82 flex">
            <img
              src={item.img}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="buyDetails artboard artboard-horizontal phone-1 ml-10 bg-base-300 rounded-md">
            <h1 className="font-bold tracking-normal text-gray-900 sm:text-3xl mt-3 text-justify ml-3 ">
              {item.name}
            </h1>
            <nav aria-label="Breadcrumb">
              <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <li>
                  <div className="flex items-center">
                    <Link
                      to={"/catalogo"}
                      className="mr-2 text-sm font-medium text-gray-900"
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
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>

                <li>
                  <div className="flex items-center">
                    <Link className="mr-2 text-sm font-medium text-gray-900">
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
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    {item.name}
                  </Link>
                </li>
              </ol>
            </nav>
            <h2 className="price text-lg mt-3 ml-3 ">Precio: ${item.Precio}</h2>
            <h2 className="price text-lg mt-3 ml-3 ">
              Especie: {item.especie}
            </h2>
            <h2 className="price text-lg mt-3 ml-3 ">
              Cantidad: Pack por {item.Cantidad}
            </h2>
            <div className=" relative cardActions flex-column flex-center m-5">
              <ItemCount item={item} />
              <p className="mt-3">Stock: {item.stock} Unidades</p>
              <div className="cardButtons flex flex-grow mb-3">
                {/* Add to cart */}
                <Link to={"/cart"}>
                  <button className="btn btn-xs justify-end mt-3">
                    Ir al Carrito
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Info  */}
      <div className="productDescription m-10 flex">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 content-center">
          <h1 className=" font-bold tracking-normal text-gray-900 sm:text-3xl m-auto text-justify">
            ¿Qué es?
          </h1>
          <div className="space-y-6">
            <p className="font-medium text-justify text-gray-900 w-80 mt-9 tracking-wide">
              {item.Description}
            </p>
          </div>
        </div>

        <div className="properties ml-8 lg:border-r lg:border-gray-200">
          <h1 className="font-bold tracking-normal text-gray-900 sm:text-3xl m-auto text-justify">
            Propiedades
          </h1>

          <div className="font-medium text-justify text-gray-900 w-80 mt-9 tracking-wide">
            <ul className="list-disc space-y-3 pl-4 text-m">
              <li className="text-gray-900">
                <span className="font-medium text-justify text-gray-900 w-80 mt-9 tracking-wide">
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

        <div className="recomendedUse ml-8 w-80 text-justify">
          <h2 className="font-bold tracking-normal text-gray-900 sm:text-3xl m-auto text-justify">
            ¿Cómo se usa?
          </h2>

          <div className="mt-4 space-y-6">
            <p className="font-medium text-justify text-gray-900 w-80 mt-9 tracking-wide">
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

  // console.log(useParams(itemId));

  useEffect(() => {
    getItemDetail().then(response => {
      setItem(response)
    })
  }, [])

  const getItemDetail = () => {
    return new Promise((resolve) => {
      setTimeout(() =>
      resolve(products.find(p => p.id == itemId)), 500)
      
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