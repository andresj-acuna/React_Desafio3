import React from "react";
import { CartWidget } from "../../Cart/CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <>
      <div className="header">
        <div className="wrapper">
          <div className="header-content">
            <nav className="navbar">
              <div className="navbar-header">
                <Link className="navbar-brand" to={"/"}>
                  Eindhoven
                </Link>
              </div>

              <div className="menu-carrito">
                <ul className="menu">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/products"}>Productos</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>Acerca</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contacto</Link>
                  </li>
                </ul>
                <CartWidget />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

// export default NavBar;
