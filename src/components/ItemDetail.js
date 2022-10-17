import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemCount from "./ItemCount";
import { products } from "./Products";

const ProductDetail = ({ item }) => {
  return (
    <div className="containerProductDetail flex-1">
      <div className="flex flex-row">
        <div class=" photoandBuyDetails m-10 flex bg-#78716c">
          {/* Container buy, stock, addCart info */}
          <div className=" productPhoto overflow-hidden rounded-lg lg:block h-80 w-80 flex">
            <img
              src={item.img}
              alt=""
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div className="buyDetails artboard artboard-horizontal phone-1 ml-10 bg-base-300 rounded-md">
            <h1 className="font-bold tracking-normal text-gray-900 sm:text-3xl mt-3 text-justify ml-3 ">
              {item.name}
            </h1>
            <nav aria-label="Breadcrumb">
              <ol
                role="list"
                class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                <li>
                  <div class="flex items-center">
                    <a href="#" class="mr-2 text-sm font-medium text-gray-900">
                      Catálogo
                    </a>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      class="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>

                <li>
                  <div class="flex items-center">
                    <a href="#" class="mr-2 text-sm font-medium text-gray-900">
                      Adaptogenos
                    </a>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      class="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>

                <li class="text-sm">
                  <a
                    href="#"
                    aria-current="page"
                    class="font-medium text-gray-500 hover:text-gray-600"
                  >
                    Aswhagandha
                  </a>
                </li>
              </ol>
            </nav>
            <h2 className="price text-lg mt-3 ml-3 ">Precio: ${item.Precio}</h2>
            <h2 className="price text-lg mt-3 ml-3 ">
              Especie: {item.especie}
            </h2>
            <h2 className="price text-lg mt-3 ml-3 ">
              Cantidad: {item.Cantidad}
            </h2>
            <div className=" relative cardActions flex flex-center">
              <ItemCount item={item} className="" />
              <div><button className="btn btn-xs justify-center">
                Agregar al Carrito
              </button></div>
              
            </div>
          </div>
        </div>
      </div>
      {/* Product Info  */}
      <div className="productDescription m-10 flex">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 content-center">
          <h1 class=" font-bold tracking-normal text-gray-900 sm:text-3xl m-auto text-justify">
            ?Qué es?
          </h1>
          <div class="space-y-6">
            <p class="font-medium text-justify text-gray-900 w-80 mt-9 tracking-wide">
              {item.Description}
            </p>
          </div>
        </div>

        <div class="properties ml-8 lg:border-r lg:border-gray-200">
          <h1 class="font-bold tracking-normal text-gray-900 sm:text-3xl m-auto text-justify">
            Propiedades
          </h1>

          <div class="font-medium text-justify text-gray-900 w-80 mt-9 tracking-wide">
            <ul class="list-disc space-y-3 pl-4 text-m">
              <li class="text-gray-900">
                <span class="font-medium text-justify text-gray-900 w-80 mt-9 tracking-wide">
                  {item.prop1}
                </span>
              </li>

              <li class="">
                <span class="">{item.prop2}</span>
              </li>

              <li class="">
                <span class="">{item.prop3}</span>
              </li>

              <li class="">
                <span class="">{item.prop4}</span>
              </li>
              <li class="">
                <span class="">{item.prop5}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="recomendedUse ml-8 w-80 text-justify">
          <h2 class="font-bold tracking-normal text-gray-900 sm:text-3xl m-auto text-justify">
            ¿Cómo se usa?
          </h2>

          <div class="mt-4 space-y-6">
            <p class="font-medium text-justify text-gray-900 w-80 mt-9 tracking-wide">
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