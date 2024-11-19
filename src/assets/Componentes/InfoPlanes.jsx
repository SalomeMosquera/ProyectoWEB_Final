import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import { useParams } from "react-router-dom";
import { lugaresData } from "../utils/lugaresData.js";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { formValidate } from "../utils/formValidate";
import { auth, db } from "../Firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

function InfoPlanes() {
  const { nombre } = useParams();
  const lugar = lugaresData[nombre];
  const detalles = lugaresData[nombre].detallesDelDia;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { required } = formValidate();
  const [cantidadPersonas, setCantidadPersonas] = useState(1);
  const itinerario = Array.from(
    { length: lugar.duracion },
    (_, index) => `Día ${index + 1}`
  );

  const precioPorPersona = lugar.precio; // Precio por persona en la moneda que elijasconst precioPorPersona = 50; // Precio por persona en la moneda que elijas
  const precioFormateado = new Intl.NumberFormat("es-CO").format(
    precioPorPersona
  );

  // Calcular el total basado en la cantidad de personas
  const total = cantidadPersonas * precioPorPersona;
  const totalFormateado = new Intl.NumberFormat("es-CO").format(total);

  const savePurchase = async (userID, items, total) => {
    try {
      console.log("Datos a guardar:", userID, items, total);
      await addDoc(collection(db, "Purchases"), {
        userID,
        items,
        total,
        date: new Date().toISOString(),
      });
      console.log("Compra registrada exitosamente.");
    } catch (error) {
      console.error("Error al guardar la compra:", error);
    }
  };

  // Función para incrementar el número de personas
  const incrementarPersonas = (e) => {
    e.preventDefault();
    setCantidadPersonas(cantidadPersonas + 1);
  };

  // Función para decrementar el número de personas
  const decrementarPersonas = (e) => {
    e.preventDefault();
    if (cantidadPersonas > 1) {
      setCantidadPersonas(cantidadPersonas - 1); // Evitar que el número de personas sea negativo
    }
  };

  const handleSubmitC = (data) => {
    const { cedula, nombreForm, numeroTarjeta } = data;

    console.log("Campo 1: ", cedula);
    console.log("Campo 2: ", nombreForm);
    console.log("Campo 3: ", numeroTarjeta);

    if (!cedula || !nombreForm || !numeroTarjeta) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Aquí deberías reemplazar 'usuarioId123' por el ID real del usuario logueado
    const user = auth.currentUser;
    if (!user) {
      alert("Por favor, inicia sesión.");
      return;
    }

    const userID = user.uid;
    const items = [
      {
        destino: nombre,
        nombreCedula: nombreForm,
        cantidad: cantidadPersonas,
        precio: precioFormateado,
      },
    ];

    // Guardamos la compra en Firestore
    savePurchase(userID, items, totalFormateado);

    // Mostrar un mensaje de confirmación
    alert(
      `Reserva completada para ${nombre}. Total a pagar: $${totalFormateado}`
    );
  };

  if (!lugar) {
    return <h2>Lugar no encontrado</h2>;
  }

  return (
    <>
      <Navbar />
      <div className="infoPlanes">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to="/lugares">Planes</NavLink>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {lugar.nombre}
            </li>
          </ol>
        </nav>
        <div className="containerPlanes">
          <div className="plan">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide "
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={lugar.imagen1}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={lugar.imagen2}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={lugar.imagen3}
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
                <img
                  src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e"
                  alt=""
                />
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <img
                  src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
                  alt=""
                />
              </button>
            </div>

            <h1>{lugar.titulo}</h1>
            <div className="top-line"></div>

            <div className="info-adicional">
              <ul>
                <li>
                  <h4>Ubicación</h4>
                  <p>{lugar.ubicacion}</p>
                </li>
                <li>
                  <h4>Precio</h4>
                  <p>${precioFormateado}</p>
                </li>
                <li>
                  <h4>Duración</h4>
                  <p>{lugar.duracion} dias</p>
                </li>
                <li>
                  <h4>Clima</h4>
                  <p>{lugar.clima}</p>
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

            <form onSubmit={handleSubmit(handleSubmitC)}>
              <div className="mb-3 form-compra">
                <label className="form-label">Cédula de Ciudadanía</label>

                <input
                  type="number"
                  className="form-control"
                  id="input-form"
                  {...register("cedula", { required })}
                ></input>
                {errors.cedula && <p>Este campo es obligatorio.</p>}
              </div>

              <div className="mb-3 form-compra">
                <label className="form-label">Nombre en la tarjeta</label>

                <input
                  type="text"
                  className="form-control"
                  id="input-form"
                  {...register("nombreForm", { required })}
                ></input>
                {errors.nombreForm && <p>Este campo es obligatorio.</p>}
              </div>

              <div className="mb-3 form-compra">
                <label className="form-label">Número de Tarjeta</label>

                <input
                  type="number"
                  className="form-control"
                  id="input-form"
                  {...register("numeroTarjeta", { required })}
                ></input>
                {errors.numeroTarjeta && <p>Este campo es obligatorio.</p>}
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
        <div className="descripcion">
          <h1>Descripción</h1>
          <p>{lugar.descripcion}</p>
        </div>
        <div className="line"></div>
        <div className="juntos">
          <ul>
            <div className="accordion" id="accordionExample">
              <h1>Itinerario</h1>
              {itinerario.map((dia, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                    >
                      <span>{dia}:</span> {detalles[index]?.actividad}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse `}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {detalles[index]?.descripcion}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ul>
          <ul>
            <h1 className="titulo-itinerario">Incluye / No incluye</h1>
            <div className="incluido-excluido">
              <ul className="incluido">
                <li>
                  <i className="fa-solid fa-check"></i>
                  <p>{lugar.incluido1}</p>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <p>{lugar.incluido2}</p>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <p>{lugar.incluido3}</p>
                </li>
              </ul>
              <ul className="excluido">
                <li>
                  <i className="fa-solid fa-x"></i>
                  <p>{lugar.excluido1}</p>
                </li>
                <li>
                  <i className="fa-solid fa-x"></i>
                  <p>{lugar.excluido2}</p>
                </li>
                <li>
                  <i className="fa-solid fa-x"></i>
                  <p>{lugar.excluido3}</p>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default InfoPlanes;
