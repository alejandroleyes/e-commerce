import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import StoreContext from "../../Context/StoreContext"
import CartProducts from "../../components/Cart/CartProducts"

const Cart = () => {
  const { state } = useContext(StoreContext)
  return (
    <div>
      <div className=" px-4 flex flex-col justify-between  sm:flex-row sm:px-8">
        <h1 className=" ml-1 py-4 text-lg sm:text-2xl">Shopping Cart</h1>
        <div className=" flex flex-row justify-center ">
          <Link to="/">
            <button className=" mx-2 mt-4 bg-blue-light text-white-light hover:bg-blue-dark  hover:text-white-light  rounded-lg h-8  font-medium text-base w-40 text-center ">
              Continue Shopping
            </button>
          </Link>
          <Link to="/checkout">
            <button className=" mx-2 mt-4 bg-blue-light text-white-light hover:bg-blue-dark  hover:text-white-light  rounded-lg h-8  font-medium text-base  w-40 text-center ">
              Go to Checkout
            </button>
          </Link>
        </div>
      </div>

      <div>
        {state.Cart.length > 0 ? (
          <CartProducts />
        ) : (
          <h3 className="text-center mt-10 px-8 sm:text-lg">
            You have not added any product to your shopping cart yet.
          </h3>
        )}
      </div>
    </div>
  )
}

export default Cart
