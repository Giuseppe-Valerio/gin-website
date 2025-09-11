// src/components/Hero.jsx
import React from "react";
import "./Hero.css";

// Importa l'immagine di sfondo da src/assets
import heroBg from "../assets/images/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      className="hero-section d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `
          linear-gradient(rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.9)),
          url(${heroBg})
        `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-stars"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          DISTILLERIA
          <br />
          <span className="hero-gold">CASALE DELLA MONTAGNA</span>
        </h1>
        <p className="hero-subtitle">Gin artigianali 100% fatti a mano, tra le montagne e il mare di Sicilia.</p>
        <a href="#products" className="hero-btn">
          Scopri i nostri gin
        </a>
      </div>
    </section>
  );
};

export default Hero;
