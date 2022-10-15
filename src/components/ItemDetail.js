import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { products } from "./Products";

const ProductDetail = ({ item }) => {
  return (
    <div className="containerProductDetail flex-1">
      <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
          <img
            src={item.img}
            alt="Two each of gray, white, and black shirts laying flat."
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      {/* Product Info  */}
      <div className="productInfo m-10 flex">
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


      <div class="properties">
        <h1 class="font-semibold text-gray-900">Propiedades</h1>

        <div class="mt-4">
          <ul class="list-disc space-y-2 pl-4 text-sm">
            <li class="text-gray-400">
              <span class="text-gray-600">Hand cut and sewn locally</span>
            </li>

            <li class="text-gray-400">
              <span class="text-gray-600">
                Dyed with our proprietary colors
              </span>
            </li>

            <li class="text-gray-400">
              <span class="text-gray-600">Pre-washed &amp; pre-shrunk</span>
            </li>

            <li class="text-gray-400">
              <span class="text-gray-600">Ultra-soft 100% cotton</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-10 w-80 text-justify">
        <h2 class="text-sm font-medium text-gray-900">Details</h2>

        <div class="mt-4 space-y-6">
          <p class="text-sm text-gray-600">
            The 6-Pack includes two black, two white, and two heather gray Basic
            Tees. Sign up for our subscription service and be the first to get
            new, exciting colors, like our upcoming &quot;Charcoal Gray&quot;
            limited release.
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

  console.log(useParams(itemId));

  useEffect(() => {
    getItemDetail().then(response => {
      console.log(response)
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