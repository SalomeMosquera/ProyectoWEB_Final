import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./assets/Componentes/Navbar.jsx";
import Index from "./assets/Componentes/Index.jsx";
import Lugares from "./assets/Componentes/Lugares.jsx";
import Nosotros from "./assets/Componentes/Nosotros.jsx";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        {" "}
        {/* Envuelve las rutas con BrowserRouter */}
        <Navbar />
        <div>
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/lugares" element={<Lugares />} />
              <Route path="/nosotros" element={<Nosotros />} />
            </Routes>
          </main>

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
