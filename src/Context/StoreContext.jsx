import React, { createContext } from "react"
import { useReducer } from "react"
import { products } from "../assets/products"
const StoreContext = createContext()
const initialState = {
  products: products,
  Cart: [],
  Total: 0,
  CountItems: 0,
}
const reducer = (state, action) => {
  switch (action.type) {
    case "Cart": {
      const producExist = state.Cart.find(
        (item) => item.item.id === action.payload.item.id
      )

      return producExist
        ? {
            ...state,
            Cart: state.Cart.map((product) =>
              product.item.id === action.payload.item.id
                ? {
                    ...product,
                    quantity: product.quantity + 1,
                    subTotal:
                      (product.quantity + 1) * action.payload.item.price,
                  }
                : product
            ),
            Total: state.Total + action.payload.item.price,
            CountItems: state.CountItems + 1,
          }
        : {
            ...state,
            Cart: [...state.Cart, action.payload],
            Total: state.Total + action.payload.item.price,
            CountItems: state.CountItems + 1,
          }
    }

    case "Remove": {
      const removeProduct = state.Cart.find(
        (product) => product.item.id === action.payload
      )

      return removeProduct.quantity > 1
        ? {
            ...state,
            Cart: state.Cart.map((product) =>
              product.item.id === action.payload
                ? {
                    ...product,
                    quantity: product.quantity - 1,
                    subTotal: (product.quantity - 1) * product.item.price,
                  }
                : product
            ),
            Total: state.Total - removeProduct.item.price,
            CountItems: state.CountItems - 1,
          }
        : {
            ...state,
            Cart: state.Cart.filter(
              (product) => product.item.id !== action.payload
            ),

            CountItems: state.CountItems - 1,
            Total:
              state.Cart.length === 1
                ? 0
                : state.Total - removeProduct.item.price,
          }
    }

    case "RemoveProduct": {
      const removeProduct = state.Cart.find(
        (product) => product.item.id === action.payload
      )
      return {
        ...state,

        Cart: state.Cart.filter(
          (product) => product.item.id !== action.payload
        ),

        CountItems: state.CountItems - removeProduct.quantity,

        Total:
          state.Cart.length === 1 ? 0 : state.Total - removeProduct.subTotal,
      }
    }

    default:
      return state
  }
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleAddtoCart = (item) => {
    dispatch({
      type: "Cart",
      payload: { item, quantity: 1 },
    })
  }

  const handleRemovefromCart = (id) => {
    dispatch({ type: "Remove", payload: id })
  }

  const handleRemoveProduct = (id) => {
    dispatch({ type: "RemoveProduct", payload: id })
  }
  const data = {
    handleAddtoCart,
    handleRemovefromCart,
    handleRemoveProduct,

    state,
  }
  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>
}

export default StoreContext
export { StoreProvider }
