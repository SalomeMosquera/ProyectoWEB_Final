import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div>
        <nav className="fixed">
          <ul>
            <li>
              <img className="logo" src="./Img/avion.png" alt="" />
            </li>
            <li>ExplorandoAndo</li>
          </ul>
          <ul>
            <li>
              <NavLink to="/" activeclassname="active">
                Inicio
              </NavLink>
              <NavLink to="/lugares" activeclassname="active">
                Lugares
              </NavLink>
              <NavLink to="/nosotros" activeclassname="active">
                Nosotros
              </NavLink>
            </li>
            <li>
              <h1>Iniciar sesión</h1>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
