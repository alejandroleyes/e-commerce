import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import StoreContext from "../../Context/StoreContext"
const Checkout = () => {
  const { state } = useContext(StoreContext)
  return (
    <div>
      <h2 className=" ml-10 py-4 text-lg sm:text-2xl">Checkout</h2>

      <h3 className="text-center font-semibold text-xl sm:text-2xl">
        Order Summary
      </h3>

      <div className=" flex flex-row  justify-center  text-xs sm:text-base ">
        <table className="  w-full sm:w-11/12 ">
          <thead>
            <tr className="  bg-gray-lightx2 ">
              <th className="px-1 p py-3 font-bold whitespace-nowrap">
                Product
              </th>
              <th className="px-1 py-3 font-bold whitespace-nowrap">Name</th>
              <th className="px-1 py-3 font-bold whitespace-nowrap">Qty</th>
              <th className="px-1 py-3 font-bold whitespace-nowrap">Price</th>
              <th className="px-1 py-3 font-bold whitespace-nowrap">
                Total Price
              </th>
            </tr>
          </thead>
          <tbody>
            {state.Cart.map((product) => (
              <tr key={product.item.id}>
                <td className="p-3  flex flex-row justify-center">
                  <img
                    src={product.item.image}
                    alt={product.item.name}
                    className=" w-8 h-8 sm:w-16 sm:h-16   "
                  />
                </td>
                <td className="p-3  text-center whitespace-nowrap">
                  {product.item.name}
                </td>
                <td className="p-3 text-center whitespace-nowrap">
                  {product.quantity}
                </td>
                <td className="p-3  text-center whitespace-nowrap">
                  $ {product.item.price}
                </td>
                <td className="p-3 text-center  whitespace-nowrap ">
                  $ {(product.item.price * product.quantity).toFixed(2)}
                </td>
              </tr>
            ))}

            <tr>
              <td className="p-3   text-center whitespace-nowrap"></td>
              <td className="p-3  text-center whitespace-nowrap"></td>
              <td className="p-3  text-center whitespace-nowrap">
                <div className="font-bold">{state.CountItems}</div>
              </td>
              <td className="p-3 text-center whitespace-nowrap"></td>
              <td className="p-3 font-extrabold text-center whitespace-nowrap">
                Total $ {state.Total.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-row mr-0 justify-center mt-4 mb-8 ">
        <Link to="/cart">
          <button className=" mx-2 mt-4 bg-blue-light text-white-light hover:bg-blue-dark  hover:text-white-light  rounded-lg h-8  font-medium text-base w-40 text-center">
            Return to Cart
          </button>
        </Link>

        {state.Cart.length > 0 ? (
          <Link to="Pay">
            <button className="mx-2 mt-4 bg-blue-light text-white-light hover:bg-blue-dark  hover:text-white-light  rounded-lg h-8  font-medium text-base w-40 text-center ">
              Proceed to Pay
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  )
}

export default Checkout
