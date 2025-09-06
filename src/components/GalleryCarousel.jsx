// src/components/GalleryCarousel.jsx

import "./GalleryCarousel.css";
import Carousel from "react-bootstrap/Carousel";

const GalleryCarousel = () => {
  const images = [
    "/assets/images/botamiche-gallery.jpg",
    "/assets/images/esposizioni-gallery.jpg",
    "/assets/images/formati-diversi-gallery.jpg",
    "/assets/images/formati-piccoli-gallery.jpg",
    "/assets/images/laboratorio-gallery.jpg",
    "/assets/images/regalo-gallery.jpg",
    "/assets/images/sede-gallery.jpg",
  ];

  return (
    <div className="gallery-carousel" id="gallery">
      {" "}
      {/* Aggiunto id per ancoraggio */}
      <Carousel interval={3500} controls indicators fade>
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
