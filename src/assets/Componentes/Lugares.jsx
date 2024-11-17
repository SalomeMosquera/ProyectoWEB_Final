import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";

function Lugares() {
  const navigate = useNavigate();

  const handleItemClick = (nombre) => {
    navigate(`/infoPlanes/${nombre}`);
  };

  return (
    <>
      <Navbar />
      <div className="lugares">
        <section id="work-a" className="text-center py-3">
          <div className="container">
            <h2 className="section-title">Descubre nuestros planes</h2>
            <div className="bottom-line" />
            <p className="lead">
              Aquí encontrarás una selección de planes diseñados para que
              disfrutes al máximo de lo que este hermoso país tiene para
              ofrecer.
            </p>
            <p className="lead">
              ¡Explora, elige tu favorito y prepárate para vivir una aventura!
            </p>
            {/* Galería de items */}
            <div className="items">
              <div
                className="item"
                onClick={() => handleItemClick("Cartagena de Indias")}
              >
                <div className="item-image">
                  <img
                    src="https://www.viajes.cl/hubfs/Torre%20del%20Reloj%20en%20Cartagena%20de%20Indias,%20Colombia.jpg"
                    alt=""
                  />
                </div>
                <div className="item-text">
                  <div className="item-text-wrap">
                    <p className="item-text-category">
                      Aventura colonial y playa
                    </p>
                    <h2 className="item-text-title">Cartagena de Indias</h2>
                  </div>
                </div>
              </div>
              <div
                className="item"
                onClick={() => handleItemClick("Eje Cafetero")}
              >
                <div className="item-image">
                  <img
                    src="https://turismounipolar.com/wp-content/uploads/2022/04/Torre-Mirador-eje-cafetero.jpg
"
                    alt=""
                  />
                </div>
                <div className="item-text">
                  <div className="item-text-wrap">
                    <p className="item-text-category">Ruta del Café</p>
                    <h2 className="item-text-title">Eje Cafetero</h2>
                  </div>
                </div>
              </div>
              <div
                className="item"
                onClick={() => handleItemClick("El Amazonas")}
              >
                <div className="item-image">
                  <img
                    src="https://www.colombiatudestino.com/image/wJ4p8bwGNQdzXqa0PQhNO89mhZUKNJiegj4H2FPM.jpeg"
                    alt=""
                  />
                </div>
                <div className="item-text">
                  <div className="item-text-wrap">
                    <p className="item-text-category">Expedición en la Selva</p>
                    <h2 className="item-text-title">Amazonas</h2>
                  </div>
                </div>
              </div>
              <div className="item" onClick={() => handleItemClick("Guatapé")}>
                <div className="item-image">
                  <img
                    src="https://raw.githubusercontent.com/JhamG9/api-viaja/main/uploads/guatape/piedra-guatape.webp"
                    alt=""
                  />
                </div>
                <div className="item-text">
                  <div className="item-text-wrap">
                    <p className="item-text-category">
                      Naturaleza y Paisajes Inolvidables
                    </p>
                    <h2 className="item-text-title">Guatapé</h2>
                  </div>
                </div>
              </div>
              <div
                className="item"
                onClick={() => handleItemClick("San Andrés")}
              >
                <div className="item-image">
                  <img
                    src="https://media.staticontent.com/media/pictures/2380f5a2-aa34-4205-870a-491b95f3cb8b"
                    alt=""
                  />
                </div>
                <div className="item-text">
                  <div className="item-text-wrap">
                    <p className="item-text-category">
                      Mar de los Siete Colores
                    </p>
                    <h2 className="item-text-title">San Andrés</h2>
                  </div>
                </div>
              </div>
              <div
                className="item"
                onClick={() => handleItemClick("Caño Cristales")}
              >
                <div className="item-image">
                  <img
                    src="https://cdn0.matrimonio.com.co/article/8185/original/1280/jpg/35818-shutterstock-371459737.jpeg"
                    alt=""
                  />
                </div>
                <div className="item-text">
                  <div className="item-text-wrap">
                    <p className="item-text-category">Paraíso Multicolor</p>
                    <h2 className="item-text-title">Caño Cristales</h2>
                  </div>
                </div>
              </div>
              <div className="item" onClick={() => handleItemClick("Medellín")}>
                <div className="item-image">
                  <img
                    src="https://wander-lush.org/wp-content/uploads/2018/11/Emily-Lush-Comuna-13-HERO-V2-11.jpg"
                    alt=""
                  />
                </div>
                <div className="item-text">
                  <div className="item-text-wrap">
                    <p className="item-text-category">Cultura y Modernidad</p>
                    <h2 className="item-text-title">Medellín</h2>
                  </div>
                </div>
              </div>
              <div
                className="item"
                onClick={() => handleItemClick("Desierto de la Tatacoa")}
              >
                <div className="item-image">
                  <img
                    src="https://aventurecolombia.com/wp-content/uploads/2021/03/Desert-de-Tatacoa-%C2%A9-tristan-quevilly.jpg"
                    alt=""
                  />
                </div>
                <div className="item-text">
                  <div className="item-text-wrap">
                    <p className="item-text-category">
                      Aventuras Bajo las Estrellas
                    </p>
                    <h2 className="item-text-title">Desierto de la Tatacoa</h2>
                  </div>
                </div>
              </div>
              <div
                className="item"
                onClick={() => handleItemClick("Santa Marta")}
              >
                <div className="item-image">
                  <img
                    src="https://media.staticontent.com/media/pictures/ec5a302c-5aaf-4708-aaf3-9a7a4cd691c0 "
                    alt=""
                  />
                </div>
                <div className="item-text">
                  <div className="item-text-wrap">
                    <p className="item-text-category">
                      El Corazón del Caribe Colombiano
                    </p>
                    <h2 className="item-text-title">Santa Marta</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Lugares;
