import React from "react";
import { NavBar } from "./components/Home/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Products } from "./views/Products";
import { About } from "./views/About";
import { Contact } from "./views/Contact";
import { ItemDetailContainer } from "./components/Home/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./Context/CartContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <NavBar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/detalle/:productID">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;

// title={"Mi título de ItemListContainer"}
