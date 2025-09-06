// src/components/Products.jsx
import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductModal from "./ProductModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Errore nel caricamento dei prodotti:", err));
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="products-section py-5">
      <div className="container">
        <h2 className="products-title text-center mb-5">I Nostri Gin Artigianali</h2>
        <p className="text-center mb-5" style={{ color: "#666", fontSize: "1.1em" }}>
          Disponibili in due formati: ideali per regalo, prova o viaggio.
        </p>

        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="product-card text-center d-flex flex-column h-100">
                <div className="product-img-wrapper">
                  <img src={product.image} alt={product.name} className="product-img" />
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc flex-grow-1">{product.description}</p>

                {/* Due formati disponibili */}
                <div className="product-formats mt-3">
                  <p className="product-format">
                    <strong>50 cl</strong>: €{product.price},00
                  </p>
                  <p className="product-format small-format">
                    <strong>10 cl</strong>: €10,00
                  </p>
                </div>

                <button className="btn btn-gold btn-sm my-3" onClick={() => openModal(product)}>
                  Scopri di più
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
    </section>
  );
};

export default Products;
