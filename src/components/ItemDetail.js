import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemCount from "./ItemCount";
import { products } from "./Products";

const ProductDetail = ({ item }) => {
  return (
    <div className="containerProductDetail flex-1">
      <div className="flex flex-row">
        <div class=" productPhoto m-10">
          <div class=" overflow-hidden rounded-lg lg:block h-80 w-80">
            <img
              src={item.img}
              alt=""
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="buyDetails">
          <ItemCount item={ item } />
        </div>
      </div>
      {/* Container buy, stock, addCart info */}
      
      {/* Product Info  */}
      <div className="productDescription m-10 flex">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 content-center">
          <h1 class=" font-bold tracking-normal text-gray-900 sm:text-3xl m-auto text-justify">
            {item.name}
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
      resolve(products.find(p => p.id == itemId)), 1000)
      
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