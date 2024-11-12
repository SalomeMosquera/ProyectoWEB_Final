import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { auth, db } from "../Firebase/firebase";
import { getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [userDetails, setUserDetails] = useState(null);
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

  return (
    <>
      {userDetails ? (
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
                <NavLink to="/home" activeclassname="active">
                  Inicio
                </NavLink>
                <NavLink to="/lugares" activeclassname="active">
                  Lugares
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
                    Log Out
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </button>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      ) : (
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
                <NavLink to="/home" activeclassname="active">
                  Inicio
                </NavLink>
                <NavLink to="/lugares" activeclassname="active">
                  Lugares
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
                    Log Out
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </button>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
