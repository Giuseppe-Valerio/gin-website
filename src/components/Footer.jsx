// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="text-center">
          {/* Copyright */}
          <p className="footer-text mb-3" style={{ fontSize: "0.9rem" }}>
            &copy; {new Date().getFullYear()} Distilleria Casale della Montagna. Tutti i diritti riservati.
          </p>

          {/* Icone social - centrati */}
          <div className="social-links d-flex justify-content-center gap-4">
            {/* Instagram */}
            <a
              href="https://instagram.com/distilleriacdm"
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
              aria-label="Vai al profilo Instagram"
            >
              <i className="bi bi-instagram" style={{ fontSize: "1.6rem", color: "white" }}></i>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/Distilleria-Casale-Della-Montagna/pfbid0oHgUsbcm17B5kzuguMYX41Rb3DNELLmX72Z3bUcjB6oXsu7wWhT47ns4jCqLGbs7l/?mibextid=wwXIfr&rdid=q2TTXWgeQfhoWT4l&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EPDkv6wG4%2F%3Fmibextid%3DwwXIfr"
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
              aria-label="Vai al profilo Facebook"
            >
              <i className="bi bi-facebook" style={{ fontSize: "1.6rem", color: "white" }}></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
