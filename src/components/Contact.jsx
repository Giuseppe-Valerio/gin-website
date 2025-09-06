// src/components/Contact.jsx
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="contact-title text-center mb-5">Contattaci</h2>

        <div className="row justify-content-center">
          {/* Colonna vuota sinistra (2 su md+) */}
          <div className="col-12 col-md-2 col-lg-2"></div>

          {/* Dati di contatto (4 su md+) */}
          <div className="col-12 col-md-4 col-lg-4">
            <div className="contact-info">
              <div className="contact-item mb-4">
                <h3 className="contact-label">
                  <i className="bi bi-geo-alt me-2" style={{ color: "#d4af37" }}></i>
                  Indirizzo
                </h3>
                <p className="contact-text">
                  Piazza Marconi 10-11
                  <br />
                  98036 Montagnareale (ME)
                </p>
              </div>

              <div className="contact-item mb-4">
                <h3 className="contact-label">
                  <i className="bi bi-envelope-at me-2" style={{ color: "#d4af37" }}></i>
                  Email
                </h3>
                <p className="contact-text">
                  <a href="mailto:distilleriacdm@gmail.com" className="contact-link">
                    distilleriacdm@gmail.com
                  </a>
                </p>
              </div>

              <div className="contact-item mb-4">
                <h3 className="contact-label">
                  <i className="bi bi-telephone me-2" style={{ color: "#d4af37" }}></i>
                  Telefono
                </h3>
                <p className="contact-text">
                  <a href="tel:+393202951299" className="contact-link">
                    +39 320 295 1299
                  </a>
                </p>
              </div>

              <div className="contact-item mb-4">
                <h3 className="contact-label">
                  <i className="bi bi-clock me-2" style={{ color: "#d4af37" }}></i>
                  Orari di apertura
                </h3>
                <p className="contact-text">
                  Lun-Ven: 10:00 – 19:00
                  <br />
                  Sabato: 10:00 – 18:00
                </p>
              </div>
            </div>
          </div>

          {/* Mappa (4 su md+) */}
          <div className="col-12 col-md-4 col-lg-4">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.143120435777!2d14.782423415717476!3d38.06279378524359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130f48b512c998b9%3A0x466780200479d78b!2sPiazza%20Marconi%2C%2010%2C%2098036%20Montagnareale%20ME!5e0!3m2!1sit!2sit!4v1724000000000!5m2!1sit!2sit"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                title="Mappa distilleria"
              ></iframe>
            </div>
          </div>

          {/* Colonna vuota destra (2 su md+) */}
          <div className="col-12 col-md-2 col-lg-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
