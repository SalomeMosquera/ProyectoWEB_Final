import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./assets/Componentes/Navbar.jsx";
import Inicio from "./assets/Componentes/Home.jsx";
import Lugares from "./assets/Componentes/Lugares.jsx";
import Nosotros from "./assets/Componentes/Nosotros.jsx";
import InfoPlanes from "./assets/Componentes/InfoPlanes.jsx";
import "./App.css";

import Login from "./assets/Context/login.jsx";
import Register from "./assets/Context/Register.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/home" element={<Inicio />} />
                <Route path="/lugares" element={<Lugares />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/infoPlanes/:nombre" element={<InfoPlanes />} />
              </Routes>
            </div>
          </div>
          <footer id="main-footer">
            <p>Copyright &copy; 2024. Todos los Derechos Reservados</p>
            <p>EXPLORANDO ANDO</p>
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
