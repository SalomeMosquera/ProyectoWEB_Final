import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const Home = () => {
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    eveniet, rerum officia dolorem omnis ut.
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-landmark-dome fa-4x process-icon my-2">
                    <div className="process-step">2</div>
                  </i>
                  <h3>Centros históricos</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis illo adipisci delectus illum hic non?
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-umbrella-beach fa-4x process-icon my-2">
                    <div className="process-step">3</div>
                  </i>
                  <h3>Lugares relajantes</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod dolor commodi, quam quis veritatis recusandae.
                  </p>
                </div>
                <div>
                  <i className="fas fa-heart fa-4x process-icon my-2">
                    <div className="process-step">4</div>
                  </i>
                  <h3>Experiencias Inolvidables</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam perferendis excepturi, similique dolorem velit
                    voluptatibus.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
                sapiente. Excepturi facere sed praesentium libero?
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
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eius quas qui sint vitae. Veniam, itaque.
                    </p>
                    <a href="#" className="btn btn-card">
                      Más información
                    </a>
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
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eius quas qui sint vitae. Veniam, itaque.
                    </p>
                    <a href="#" className="btn btn-card">
                      Más información
                    </a>
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
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eius quas qui sint vitae. Veniam, itaque.
                    </p>
                    <a href="#" className="btn btn-card">
                      Más información
                    </a>
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
