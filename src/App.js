import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Products } from "./views/Products";
import { About } from "./views/About";
import { Contact } from "./views/Contact";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/detalle/:productID">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

// title={"Mi título de ItemListContainer"}
