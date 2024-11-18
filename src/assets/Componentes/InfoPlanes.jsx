import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import { useParams } from "react-router-dom";
import { lugaresData } from "../utils/lugaresData.js";

const InfoPlanes = () => {
  const { nombre } = useParams();
  const lugar = lugaresData[nombre];

  // Estado para almacenar la cantidad de personas
  const [cantidadPersonas, setCantidadPersonas] = useState(0);

  const precioPorPersona = 500000; // Precio por persona en la moneda que elijasconst precioPorPersona = 50; // Precio por persona en la moneda que elijas
  const precioFormateado = new Intl.NumberFormat("es-CO").format(
    precioPorPersona
  );

  // Calcular el total basado en la cantidad de personas
  const total = cantidadPersonas * precioPorPersona;
  const totalFormateado = new Intl.NumberFormat("es-CO").format(total);

  // Función para incrementar el número de personas
  const incrementarPersonas = (e) => {
    e.preventDefault();
    setCantidadPersonas(cantidadPersonas + 1);
  };

  // Función para decrementar el número de personas
  const decrementarPersonas = (e) => {
    e.preventDefault();
    if (cantidadPersonas > 0) {
      setCantidadPersonas(cantidadPersonas - 1); // Evitar que el número de personas sea negativo
    }
  };

  if (!lugar) {
    return <h2>Lugar no encontrado</h2>;
  }

  return (
    <>
      <Navbar />
      <div className="infoPlanes">
        <div className="containerPlanes">
          <div className="plan">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/c1/8c/e6/em-cima-da-muaralha.jpg?w=1200&h=1200&s=1"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://mlqfmr3rpryd.i.optimole.com/cb:JBSP.a525/w:auto/h:auto/q:100/ig:avif/https://cartagena-tours.co/wp-content/uploads/2023/12/4.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://elcomercio.pe/resizer/GttnGM17iguL0FUHkcrIqHrzu2o=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KOP3QQAJZNDJ7MQFCCCPHWDONA.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <h1>Título</h1>
            <div className="top-line"></div>

            <div className="info-adicional">
              <ul>
                <li>
                  <p>Ubicación</p>
                  <p>Cartagena de Indias</p>
                </li>
                <li>
                  <p>Precio</p>
                  <p>$1.5</p>
                </li>
                <li>
                  <p>Duración</p>
                  <p>5días</p>
                </li>
                <li>
                  <p>Clima</p>
                  <p>Cálido y Seco</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="compra">
            <h3>
              ${precioFormateado}
              <span>/ por Persona</span>
            </h3>
            <div className="top-line"></div>

            <form>
              <div className="mb-3 form-compra">
                <label className="form-label">Cédula de Ciudadanía</label>

                <input
                  type="number"
                  className="form-control"
                  id="input-form"
                ></input>
              </div>

              <div className="mb-3 form-compra">
                <label className="form-label">Nombre</label>

                <input
                  type="text"
                  className="form-control"
                  id="input-form"
                ></input>
              </div>

              <div className="mb-3 form-compra">
                <label className="form-label">Número de Tarjeta</label>

                <input
                  type="number"
                  className="form-control"
                  id="input-form"
                ></input>
              </div>

              <div className="ticket form-compra">
                <h3>Reserva</h3>
                <div className="operacion">
                  <h2>Cantidad de Personas: </h2>
                  <div className="btn-operacion">
                    <button onClick={decrementarPersonas}>-</button>
                    <p>{cantidadPersonas}</p>
                    <button onClick={incrementarPersonas}>+</button>
                  </div>
                </div>

                <h4>Total a Pagar: ${totalFormateado}</h4>
              </div>

              <div className="d-grid comprar">
                <button type="submit" className="btn btn-primary">
                  Comprar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoPlanes;
