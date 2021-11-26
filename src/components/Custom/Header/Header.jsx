import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import StoreContext from "../../../Context/StoreContext"
import cartIcon from "../../../assets/icons/shoppingCartw.svg"
const Header = () => {
  const { state } = useContext(StoreContext)
  return (
    <div className=" w-full h-20 bg-blue-dark text-sm text-white-light flex flex-row items-center justify-between px-10  ">
      <Link to="/">
        <h3 className=" text-3xl font-bold mb-1">Shop</h3>
      </Link>

      <Link to="/cart" className="flex flex-row">
        <span className=" self-center mr-4 text-base font-medium">
          Total: <span>$</span> {state.Total.toFixed(2)}
        </span>
        <div className="flex flex-row ">
          <div className="relative">
            <img src={cartIcon} alt="" className="w-12  " />

            <span
              className={
                state.CountItems > 9
                  ? "text-orange-dark absolute font-medium  left-5 top-2 text-base "
                  : "text-orange-dark absolute font-medium left-1/2  top-2 text-base  "
              }
            >
              {state.CountItems}
            </span>
          </div>

          <span className="ml-2  self-center text-lg">Cart </span>
        </div>
      </Link>
    </div>
  )
}

export default Header
