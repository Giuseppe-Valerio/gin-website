// src/components/ProductModal.jsx
import React from "react";
import "./ProductModal.css";

// Importa le immagini
import londonDryImg from "../assets/images/london-dry.jpg";
import lemonDryImg from "../assets/images/lemon-dry.jpg";
import orangeChocolateImg from "../assets/images/orange-chocolate.jpg";

// Mappa i nomi delle immagini agli import
const productImages = {
  "london-dry.jpg": londonDryImg,
  "lemon-dry.jpg": lemonDryImg,
  "orange-chocolate.jpg": orangeChocolateImg,
};

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          <div className="modal-image">
            <img
              src={productImages[product.image]} // ✅ Immagine importata
              alt={product.name}
            />
          </div>
          <div className="modal-info">
            <h2 className="modal-title">{product.name}</h2>

            {/* Formati disponibili */}
            <div className="modal-formats">
              <p className="modal-format">
                <strong>Formato 50 cl</strong>: €{product.price},00
              </p>
              <p className="modal-format small-format">
                <strong>Mini formato 10 cl</strong>: €10,00
              </p>
            </div>

            <p>
              <strong>Descrizione:</strong> {product.description}
            </p>
            <p>
              <strong>Note di degustazione:</strong> {product.tastingNotes}
            </p>
            <p>
              <strong>Botanici:</strong>{" "}
              {product.botanicals?.length ? product.botanicals.join(", ") : "Non specificati"}
            </p>
            <p>
              <strong>Gradazione alcolica:</strong> {product.alcohol}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
