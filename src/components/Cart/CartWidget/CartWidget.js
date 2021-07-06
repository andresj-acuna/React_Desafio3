import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../../Context/CartContext";

import "./CartWidget.css";
export const CartWidget = (props) => {
  const { items } = useContext(CartContext);

  return (
    <>
      {items > 0 ? (
        <div className="carrito">
          <Link to="/cart">
            <i className="shopping cart icon"></i>
          </Link>
          {items > 0 && <span>{items}</span>}
        </div>
      ) : null}
    </>
  );
};

// export default CartWidget;
