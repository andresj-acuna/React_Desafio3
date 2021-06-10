import React from 'react';
import CartWidget from './CartWidget';

export const NavBar = props => {
  return <>

  <div className="header">
    <div className="wrapper">
      <div className="header-content">
        <nav className="navbar">
              <div className="navbar-header">
                  <a className="navbar-brand" href="#Home">Eindhoven</a>
              </div>

              <div className="menu-carrito">
                  <ul className="menu">
                    <li>
                      <a href="#Home">Home</a>
                    </li>
                    <li>
                      <a href="#Productos">Productos</a>
                    </li>
                    <li>
                      <a href="#Acerca">Acerca</a>
                    </li>
                    <li>
                      <a href="#Contacto">Contacto</a>
                    </li>

                  </ul>
                  <CartWidget />
              </div>
          </nav>
      </div>
    </div>
  </div>


  </>
}

export default NavBar;