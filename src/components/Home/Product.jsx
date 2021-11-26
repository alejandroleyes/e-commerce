import React from "react"

import { useContext } from "react"
import StoreContext from "../../Context/StoreContext"
const Product = () => {
  const { handleAddtoCart, state } = useContext(StoreContext)

  return (
    <div className=" px-12 py-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  items-center justify-items-center  ">
      {state.products
        ? state.products.map((product) => (
            <div
              key={product.id}
              className=" mt-6 p-3 bg-white-light border border-gray-light  w-64 h-96 rounded-lg  flex flex-col items-center  shadow-2xl  relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className=" w-40 h-40 mt-2"
              />
              <h2 className="mt-3">{product.name}</h2>
              <p className="font-medium">Price: $ {product.price} </p>
              <p className="text-sm mb-4">Catergory: {product.category}</p>
              {state.Cart.map((item) =>
                item.item.id === product.id ? (
                  <p key={product.id} className="text-gray-light  text-sm">
                    Added {item.quantity} {item.quantity > 1 ? "Items" : "Item"}{" "}
                    to Cart
                  </p>
                ) : null
              )}

              <button
                onClick={() => handleAddtoCart(product)}
                className="mt-10 pt  bg-blue-lightx2 text-white-light hover:bg-blue-light  hover:text-white-light  rounded-lg h-8  font-medium text-base w-40 text-center absolute bottom-10"
              >
                Add to Cart
              </button>
            </div>
          ))
        : null}
    </div>
  )
}

export default Product
