// src/components/GalleryCarousel.jsx
import "./GalleryCarousel.css";
import Carousel from "react-bootstrap/Carousel";

// Importa tutte le immagini staticamente da src/assets
import botamicheImg from "../assets/images/botamiche-gallery.jpg";
import esposizioniImg from "../assets/images/esposizioni-gallery.jpg";
import formatiDiversiImg from "../assets/images/formati-diversi-gallery.jpg";
import formatiPiccoliImg from "../assets/images/formati-piccoli-gallery.jpg";
import laboratorioImg from "../assets/images/laboratorio-gallery.jpg";
import regaloImg from "../assets/images/regalo-gallery.jpg";
import sedeImg from "../assets/images/sede-gallery.jpg";

const GalleryCarousel = () => {
  // Array delle immagini importate
  const images = [
    botamicheImg,
    esposizioniImg,
    formatiDiversiImg,
    formatiPiccoliImg,
    laboratorioImg,
    regaloImg,
    sedeImg,
  ];

  return (
    <div className="gallery-carousel" id="gallery">
      <Carousel interval={2500} controls indicators fade>
        {images.map((src, index) => (
          <Carousel.Item key={index}>
            <img src={src} alt={`Galleria ${index + 1}`} className="d-block w-100" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default GalleryCarousel;
