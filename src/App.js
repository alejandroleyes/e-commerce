import "./App.css"

import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import MainLayaout from "./Layouts/MainLayaout"
import { StoreProvider } from "./Context/StoreContext"
import Checkout from "./Pages/Checkout/Checkout"
import Pay from "./Pages/Pay/Pay"
import NotFound from "./Pages/NotFound/NotFound"

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <MainLayaout>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Route path="/checkout" exact>
              <Checkout />
            </Route>
            <Route path="/Pay" exact>
              <Pay />
            </Route>
            <Route path="*" exact>
              <NotFound />
            </Route>
          </Switch>
        </MainLayaout>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
