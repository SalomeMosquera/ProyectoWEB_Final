import React from "react";
import Navbar from "./Navbar.jsx";
import { useParams } from "react-router-dom";
import { lugaresData } from "../utils/lugaresData.js";

const InfoPlanes = () => {
  const { nombre } = useParams();
  const lugar = lugaresData[nombre];

  if (!lugar) {
    return <h2>Lugar no encontrado</h2>;
  }

  return (
    <>
      <Navbar />
      <div className="infoPlanes">
        <h1>{nombre}</h1>
        <img
          src={lugar.imagen}
          alt={nombre}
          style={{ width: "100%", height: "auto" }}
        />
        <p>{lugar.descripcion}</p>
      </div>
    </>
  );
};

export default InfoPlanes;
