import React from "react"
import { useContext } from "react"
import StoreContext from "../../Context/StoreContext"

const CartProducts = () => {
  const { state, handleRemovefromCart, handleRemoveProduct } =
    useContext(StoreContext)

  return (
    <div className=" px-12 py-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  items-center justify-items-center ">
      {state.products
        ? state.Cart.map((product) => (
            <div
              key={product.item.id}
              className=" mt-6 p-3 bg-white-light border border-gray-light  w-64 h-96 rounded-lg  flex flex-col items-center  shadow-2xl relative "
            >
              <img
                src={product.item.image}
                alt={product.name}
                className=" w-40 h-40 mt-2"
              />
              <h2 className="mt-4">{product.item.name}</h2>
              <p className="font-medium">Price: $ {product.item.price} </p>
              <p className="text-sm mb-2">Catergory: {product.category}</p>
              <p className="text-gray-light">Quantity: {product.quantity}</p>
              <button
                onClick={() => handleRemovefromCart(product.item.id)}
                className="mt-4   bg-red-light text-white-light hover:bg-red-dark  hover:text-white-light  rounded-lg h-8  font-medium text-base w-40 text-center"
              >
                Remove from Cart
              </button>

              <button
                onClick={() => handleRemoveProduct(product.item.id)}
                className="absolute  left-3 top-1 text-lg  text-black-light transform transition duration-100 hover:scale-105"
              >
                x
              </button>
            </div>
          ))
        : null}
    </div>
  )
}

export default CartProducts
