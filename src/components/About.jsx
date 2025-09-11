// src/components/About.jsx
import React from "react";
import "./About.css";

// Importa l'immagine correttamente da src/assets
import aboutJeremyImg from "../assets/images/about-jeremy.jpg";

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Colonna testo */}
          <div className="col-md-6">
            <h2 className="about-title">La nostra storia</h2>

            <p className="about-text">
              Alla Distilleria Casale della Montagna il gin nasce da un rito antico: una distillazione tradizionale,
              guidata solo dai sensi del mastro distillatore. Non ci sono automatismi, ma attenzione, esperienza e
              passione che si trasformano in aromi autentici.
            </p>

            <p className="about-text">
              Tutto è iniziato quasi per caso, durante un pranzo. La mia socia mi confidò il desiderio di vendere la
              distilleria. In quell’istante ho sentito che non poteva finire così: era l’occasione per darle nuova vita
              e trasformarla in un progetto capace di raccontare la mia visione.
            </p>

            <p className="about-text">
              Oggi porto avanti la distilleria con dedizione, circondandomi di esperti per eventi e degustazioni, ma
              seguendo ogni fase con la stessa cura artigianale di allora.
            </p>

            <p className="about-text">
              Ho scelto il gin perché è un distillato capace di emozionare: ogni bottiglia racchiude un viaggio
              sensoriale unico, dove tradizione e innovazione si incontrano.
            </p>

            <p className="about-text">
              La nostra linea racconta tre anime diverse: London Dry, Lemon e Orange & Chocolate. E presto, con la
              stessa passione, arriveranno nuove creazioni.
            </p>
          </div>

          {/* Colonna foto — AGGIORNATA */}
          <div className="col-md-6 text-center">
            <img
              src={aboutJeremyImg}
              alt="Jeremy Palazzolo - Fondatore della Distilleria Casale della Montagna"
              className="about-img img-fluid rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
