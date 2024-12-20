import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { auth, db } from "../Firebase/firebase";
import { getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [userDetails, setUserDetails] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        console.log("El usurio no está logeado");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handlleLogout() {
    try {
      await auth.signOut();
      navigate("/LogIn");
      console.log("El usuario ha cerrado la sesión");
    } catch (error) {
      console.error("Error al cerrar sesión: ", error.message);
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {userDetails ? (
        <div>
          <nav className="fixed">
            <ul>
              <li>
                <img className="logo" src="./Img/avion.png" alt="" />
              </li>
              <li className="pag-name">ExplorandoAndo</li>
            </ul>
            <ul>
              <li className="apartados">
                <NavLink to="/home" activeclassname="active">
                  Inicio
                </NavLink>
                <NavLink to="/lugares" activeclassname="active">
                  Planes
                </NavLink>
                <NavLink to="/nosotros" activeclassname="active">
                  Nosotros
                </NavLink>
              </li>
              <div className="userInfo">
                <li>
                  <h1>{userDetails.firstName}</h1>
                </li>
                <li>
                  <button className="btn-logOut" onClick={handlleLogout}>
                    <span>Log Out</span>
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </button>
                </li>
              </div>
              <button className="menu-btn" onClick={toggleMenu}>
                {isMenuOpen ? (
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "1.8rem" }}
                  >
                    close
                  </span>
                ) : (
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "1.8rem" }}
                  >
                    menu
                  </span>
                )}
              </button>
            </ul>
          </nav>

          {isMenuOpen && (
            <div className="hamburger-menu">
              <NavLink to="/home" activeclassname="active" onClick={toggleMenu}>
                Inicio
              </NavLink>
              <NavLink
                to="/lugares"
                activeclassname="active"
                onClick={toggleMenu}
              >
                Planes
              </NavLink>
              <NavLink
                to="/nosotros"
                activeclassname="active"
                onClick={toggleMenu}
              >
                Nosotros
              </NavLink>
            </div>
          )}
        </div>
      ) : (
        <div>
          <nav className="fixed">
            <ul>
              <li>
                <img className="logo" src="./Img/avion.png" alt="" />
              </li>
              <li className="pag-name">ExplorandoAndo</li>
            </ul>
            <ul>
              <li className="apartados">
                <NavLink to="/home" activeclassname="active">
                  Inicio
                </NavLink>
                <NavLink to="/lugares" activeclassname="active">
                  Planes
                </NavLink>
                <NavLink to="/nosotros" activeclassname="active">
                  Nosotros
                </NavLink>
              </li>
              <div className="userInfo">
                <li>
                  <h1>...</h1>
                </li>
                <li>
                  <button className="btn-logOut" onClick={handlleLogout}>
                    <span>Log Out</span>
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </button>
                </li>
              </div>
              <button className="menu-btn" onClick={toggleMenu}>
                {isMenuOpen ? (
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "1.8rem" }}
                  >
                    close
                  </span>
                ) : (
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "1.8rem" }}
                  >
                    menu
                  </span>
                )}
              </button>
            </ul>
          </nav>

          {isMenuOpen && (
            <div className="hamburger-menu">
              <NavLink to="/home" activeclassname="active" onClick={toggleMenu}>
                Inicio
              </NavLink>
              <NavLink
                to="/lugares"
                activeclassname="active"
                onClick={toggleMenu}
              >
                Planes
              </NavLink>
              <NavLink
                to="/nosotros"
                activeclassname="active"
                onClick={toggleMenu}
              >
                Nosotros
              </NavLink>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;
