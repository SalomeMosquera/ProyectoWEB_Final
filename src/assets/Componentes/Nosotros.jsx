import React from "react";
import Navbar from "./Navbar.jsx";

function Nosotros() {
  return (
    <>
      <Navbar />
      <div className="nosotros">
        {/* Secciones */}
        {/* Sección A */}
        <section id="about-a" className="text-center py-3">
          <div className="container">
            <h2 className="section-title">Sobre Nosotros</h2>
            <div className="bottom-line" />

            <div className="about-info">
              <img
                src="https://turismounipolar.com/wp-content/uploads/2022/04/Torre-Mirador-eje-cafetero.jpg"
                alt=""
                className="bio-image"
              />
              <div className="bio">
                <h4>Tu Viaje Está en Buenas Manos</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                  deleniti laborum voluptas veniam quas iusto eaque sapiente ab.
                  Praesentium, explicabo laborum minus nam a provident. Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                  deleniti laborum voluptas veniam quas iusto eaque sapiente ab.
                  Praesentium, explicabo laborum minus nam a provident. Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                  deleniti laborum voluptas veniam quas iusto eaque sapiente ab.
                  Praesentium, explicabo laborum minus nam a provident.
                </p>
              </div>
              <div className="reconocimiento award-1">
                <i className="fa-solid fa-award fa-4x" />
                <h3>Insignia de Experto en Destinos</h3>
                <p>
                  Reconocimiento por destacar la singularidad de destinos
                  turísticos.
                </p>
              </div>
              <div className="reconocimiento award-2">
                <i className="fa-solid fa-trophy fa-4x" />
                <h3>Premio a la Promoción Cultural</h3>
                <p>
                  Reconocimiento por promover la diversidad cultural a través
                  del turismo.
                </p>
              </div>
              <div className="reconocimiento award-3">
                <i className="fa-solid fa-crown fa-4x" />
                <h3>Premio a la Innovación en Turismo</h3>
                <p>
                  Reconocimiento por inspirar experiencias de viaje
                  inolvidables.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Sección B */}
        <section id="about-b" className="py-3">
          <div className="container">
            <h2 className="section-title">Nuestra Experiencia</h2>
            <div className="bottom-line" />
            <h4>Turismo familiar</h4>
            <div className="progress">
              <div style={{ width: "95%" }} />
            </div>
            <h4>Guías locales con expertos</h4>
            <div className="progress">
              <div style={{ width: "80%" }} />
            </div>
            <h4>Diseño Inspirado en Lugares</h4>
            <div className="progress">
              <div style={{ width: "55%" }} />
            </div>
            <h4>Marketing Turístico</h4>
            <div className="progress">
              <div style={{ width: "90%" }} />
            </div>
          </div>
        </section>
        {/* Sección C */}
        <section id="about-c" className="py-4">
          <div className="container">
            <h2 className="section-title">Testimonios</h2>

            <div className="bottom-line"></div>
            <p className="lead text-center">
              Echa un visazo a lo que dicen nuestros clientes...
            </p>
            <div className="testimonials">
              <div>
                <p>
                  "Explorar la magia de Colombia ha sido una experiencia
                  transformadora. Desde los cálidos atardeceres en Santa Marta
                  hasta la majestuosidad de las montañas en el Eje Cafetero,
                  cada destino ha sido una lección de historia y naturaleza.
                  Gracias a este viaje, entendí lo que significa viajar de
                  verdad."
                </p>
                <ul>
                  <li>
                    <img
                      src="https://turismounipolar.com/wp-content/uploads/2022/04/Torre-Mirador-eje-cafetero.jpg"
                      alt="Cliente 1"
                    />
                  </li>
                  <li>Mariana López, Amante del Turismo Cultural</li>
                </ul>
              </div>
              <div>
                <p>
                  "Cada uno de los destinos que visité en Colombia ha sido como
                  un capítulo de un libro fascinante. Desde los coloridos
                  mercados de Cartagena hasta la serenidad de los Llanos, me
                  sentí como si estuviera viajando a través de un país lleno de
                  historias y tradiciones. ¡Definitivamente volveré!"
                </p>
                <ul>
                  <li>
                    <img
                      src="https://turismounipolar.com/wp-content/uploads/2022/04/Torre-Mirador-eje-cafetero.jpg"
                      alt="Cliente 2"
                    />
                  </li>
                  <li>Carlos Martínez, Viajero Curioso</li>
                </ul>
              </div>
              <div>
                <p>
                  "Los planes ofrecidos me permitieron conocer Colombia de una
                  manera muy especial. Desde las caminatas por la selva hasta
                  las exploraciones por pueblos llenos de historia, pude
                  conectar con la cultura y la naturaleza de una forma que nunca
                  imaginé. Cada experiencia fue una aventura única."
                </p>
                <ul>
                  <li>
                    <img
                      src="https://turismounipolar.com/wp-content/uploads/2022/04/Torre-Mirador-eje-cafetero.jpg"
                      alt="Cliente 3"
                    />
                  </li>
                  <li>Sofía García, Exploradora del Mundo</li>
                </ul>
              </div>
              <div>
                <p>
                  "Viajar por Colombia fue una aventura llena de sorpresas.
                  Desde el contacto cercano con la naturaleza en los parques
                  naturales hasta las visitas a las comunidades locales, pude
                  disfrutar de un turismo que no solo me hizo conocer, sino
                  también valorar la riqueza del país. ¡Lo recomiendo al 100%!"
                </p>
                <ul>
                  <li>
                    <img
                      src="https://turismounipolar.com/wp-content/uploads/2022/04/Torre-Mirador-eje-cafetero.jpg"
                      alt="Cliente 1"
                    />
                  </li>
                  <li>Juan Pérez, Viajero Apasionado por la Naturaleza</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sección B */}
        <section id="contact-b" className="py-3">
          <div className="container">
            <div className="contact-info">
              <div>
                <i className="fas fa-envelope fa-2x" />
                <h3>Email</h3>
                <p>ExplorAndoAgency@gmail.com</p>
              </div>
              <div>
                <i className="fas fa-phone fa-2x" />
                <h3>Teléfono</h3>
                <p>(+57) 3158745861</p>
              </div>
              <div>
                <i className="fas fa-address-card fa-2x" />
                <h3>Dirección</h3>
                <p>Carrera 4 # 13-39 Cali-Colombia</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Nosotros;
