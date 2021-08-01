import React from "react";
import { CartWidget } from "../../Cart/CartWidget/CartWidget";
import { Link } from "react-router-dom";
import './NavBar.css';

export const NavBar = (props) => {
  const cellphones = 'cellphones';
  const tv = 'tv';
  const videogames = 'videogames'


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
                    <Link to={"/categories/" + cellphones}>Celulares</Link>
                  </li>
                  <li>
                    <Link to={"/categories/" + tv}>Televisores</Link>
                  </li>
                  <li>
                    <Link to={"/categories/" + videogames}>Gaming</Link>
                  </li>
                  <li>
                    <Link to={'/my-orders'}>Mis compras</Link>
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
