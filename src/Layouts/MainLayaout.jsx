import React from "react"
import Header from "../components/Custom/Header/Header"

const MainLayaout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default MainLayaout
