// src/components/AgeGate.jsx
import React, { useState, useEffect } from "react";
import "./AgeGate.css";

const AgeGate = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const hasConfirmed = localStorage.getItem("ageConfirmed");
    if (hasConfirmed === "true") {
      setIsConfirmed(true);
      setIsChecking(false);
    } else {
      setIsChecking(false);
    }
  }, []);

  const handleConfirm = () => {
    setIsConfirmed(true);
    localStorage.setItem("ageConfirmed", "true");
  };

  const handleDecline = () => {
    window.location.href = "https://www.google.com";
  };

  // Se l'utente ha già confermato, non mostrare nulla
  if (isConfirmed) return null;

  // Durante il check iniziale, non mostrare nulla finché non si decide
  if (isChecking) return null;

  return (
    <div className="age-gate-overlay">
      {/* Effetto stelle animate */}
      <div className="hero-stars"></div>

      <div className="age-gate-content">
        <h1 className="age-title">BENVENUTO</h1>
        <h2 className="age-question">HAI COMPIUTO 18 ANNI?</h2>
        <div className="age-buttons">
          <button onClick={handleConfirm} className="btn-yes">
            SI
          </button>
          <button onClick={handleDecline} className="btn-no">
            NO
          </button>
        </div>
        <p className="age-disclaimer">BEVI RESPONSABILMENTE</p>
      </div>
    </div>
  );
};

export default AgeGate;
