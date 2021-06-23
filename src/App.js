import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";

import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detalle/:productID">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

// title={"Mi título de ItemListContainer"}
