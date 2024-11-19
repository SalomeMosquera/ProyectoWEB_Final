import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const Home = () => {
  const navigate = useNavigate();

  const handleItemClick = (nombre) => {
    navigate(`/infoPlanes/${nombre}`);
  };

  return (
    <>
      <Navbar />
      <div className="home">
        <header className="header-home" id="header-home">
          <div className="overlay"> </div>
          <div className="container">
            <div className="header-content">
              <h1>Conoce la belleza cultural y natural de Colombia</h1>
              <p className="lead">
                Encuentra aquí los mejores lugares de Colombia
              </p>
              <NavLink to="/lugares" className="btn-home">
                Ver lugares...
              </NavLink>
              {/* <a href="lugares.html" className="btn-light">
              Ver Lugares...
            </a> */}
            </div>
          </div>
        </header>

        <>
          <section id="home-1" className="text-center py-2">
            <div className="container">
              <h2 className="section-title">
                ¿Estás listo para vivir experiencias inolvidables?
              </h2>
              <div className="bottom-line" />
              <p className="lead">
                Colombia, con su riqueza cultural, natural e histórica, ofrece
                una gran variedad de destinos que te dejarán maravillado. Desde
                los imponentes paisajes de los Andes hasta las cálidas costas
                del Caribe, pasando por la magia de la Amazonía y la
                arquitectura colonial de sus pueblos, aquí encontrarás el plan
                perfecto para cada tipo de viajero.
              </p>
              <div className="process">
                <div>
                  <i className="fa-solid fa-hat-cowboy-side fa-4x process-icon my-2">
                    <div className="process-step">1</div>
                  </i>
                  <h3>Actividades culturales</h3>
                  <p>
                    Vive la tradición y diversidad de Colombia a través de
                    festivales, bailes típicos, y la calidez de su gente, que
                    hacen de cada rincón un espacio único lleno de cultura y
                    color.
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-landmark-dome fa-4x process-icon my-2">
                    <div className="process-step">2</div>
                  </i>
                  <h3>Centros históricos</h3>
                  <p>
                    Recorre las calles empedradas de los pueblos más
                    emblemáticos, rodeado de arquitectura colonial, historias
                    fascinantes y paisajes que cuentan el pasado de Colombia.
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-umbrella-beach fa-4x process-icon my-2">
                    <div className="process-step">3</div>
                  </i>
                  <h3>Lugares relajantes</h3>
                  <p>
                    Relájate en playas paradisíacas, majestuosos parques
                    naturales y destinos que ofrecen tranquilidad y conexión con
                    la naturaleza.
                  </p>
                </div>
                <div>
                  <i className="fas fa-heart fa-4x process-icon my-2">
                    <div className="process-step">4</div>
                  </i>
                  <h3>Experiencias Inolvidables</h3>
                  <p>
                    Déjate sorprender por paisajes únicos, culturas vibrantes y
                    aventuras que te harán sentir vivo. Colombia te espera con
                    momentos que quedarán grabados en tu corazón para siempre.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="home-2" className="text-center py-2">
            <div className="stats">
              <div>
                <ul>
                  <li>
                    <i className="fa-solid fa-music fa-3x"></i>
                  </li>
                  <li className="stats-title">Festivales Anuales</li>
                  <li className="stats-number">+50</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <i className="fa-solid fa-tree fa-3x"></i>
                  </li>
                  <li className="stats-title">Parques Naturales</li>
                  <li className="stats-number">59</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <i className="fa-solid fa-paw fa-3x"></i>
                  </li>
                  <li className="stats-title">Especies de Fauna y Flora</li>
                  <li className="stats-number">+40.000</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <i className="fa-solid fa-temperature-high fa-3x"></i>
                  </li>
                  <li className="stats-title">Distintos Climas</li>
                  <li className="stats-number">6</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="home-3" className="text-center py-2">
            <div className="container">
              <h2 className="section-title">Descubre Lugares maravillosos</h2>
              <div className="bottom-line" />
              <p className="lead">
                Colombia es un país lleno de contrastes que enamoran. Ven y
                descubre lugares que te dejarán sin aliento.
              </p>
              <div className="cards">
                <div className="card">
                  <img
                    src="https://cdn0.matrimonio.com.co/article/8185/original/1280/jpg/35818-shutterstock-371459737.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Caño Cristales</h5>
                    <p className="card-text">
                      Conocido como "el río de los cinco colores", este
                      increíble destino en la Sierra de la Macarena te ofrece
                      paisajes únicos que parecen sacados de otro mundo.
                    </p>
                    <button
                      className="btn btn-card"
                      onClick={() => handleItemClick("Caño Cristales")}
                    >
                      Más información
                    </button>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="https://aventurecolombia.com/wp-content/uploads/2021/03/Desert-de-Tatacoa-%C2%A9-tristan-quevilly.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Desierto de la Tatacoa</h5>
                    <p className="card-text">
                      Explora el misterioso paisaje de uno de los desiertos más
                      icónicos de Colombia, donde la naturaleza y la astronomía
                      se encuentran en un espectáculo inolvidable.
                    </p>
                    <button
                      className="btn btn-card"
                      onClick={() => handleItemClick("Desierto de la Tatacoa")}
                    >
                      Más información
                    </button>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="https://www.colombiatudestino.com/image/wJ4p8bwGNQdzXqa0PQhNO89mhZUKNJiegj4H2FPM.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Amazonas</h5>
                    <p className="card-text">
                      Adéntrate en el corazón de la selva amazónica y descubre
                      su riqueza natural, biodiversidad única, y la conexión con
                      comunidades indígenas ancestrales.
                    </p>
                    <button
                      className="btn btn-card"
                      onClick={() => handleItemClick("El Amazonas")}
                    >
                      Más información
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </div>
    </>
  );
};

export default Home;
