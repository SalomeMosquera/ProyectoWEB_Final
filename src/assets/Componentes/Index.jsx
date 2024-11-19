import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Index() {
  const handleItemClick = (nombre) => {
    navigate(`/infoPlanes/${nombre}`);
  };
  return (
    <>
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
            <h2 className="section-title">¿Qué podrás encontrar?</h2>
            <div className="bottom-line" />
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde rem
              vitae maxime, architecto ut, inventore praesentium suscipit
              molestias mollitia error similique corporis nesciunt, atque
              corrupti. Neque ab iste eum dignissimos dolore aperiam inventore
              voluptatem quidem et totam id, nihil esse quasi tempore iusto quo
              iure nobis rem eius ducimus. Reiciendis.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  dolor commodi, quam quis veritatis recusandae.
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
                  src="https://www.lacasadejeronimo.com/wp-content/uploads/2014/10/vallecocora_003.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eius quas qui sint vitae. Veniam, itaque.
                  </p>
                  <a
                    onClick={() => handleItemClick("Cartagena de Indias")}
                    className="btn btn-card"
                  >
                    Más información
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfdR-kMLc4Ombn3Vw_Fqqv0nCKlCJbYqLRTEsxvoy4fGi3WVW7pOOqa6GDG6rVdheTZD4-IhWkr5FHCCComDPgEW6QXKkKox0uCzGmQmnOG80jb6GbCKUqxPrjkwdt7p0fVaDJMt64eMAo/w1200-h630-p-k-no-nu/DSC03970.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
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
                  src="https://reserva-guadalajara.hotelesejecafetero.net/data/Images/OriginalPhoto/6104/610436/610436588/image-salento-reserva-guadalajara-90.JPEG"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
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
    </>
  );
}

export default Index;
