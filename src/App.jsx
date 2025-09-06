import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import GalleryCarousel from "./components/GalleryCarousel";
import AgeGate from "./components/AgeGate";

function App() {
  return (
    <div className="App">
      <AgeGate />
      <Header />
      <Hero />
      <About />
      <Products />
      <GalleryCarousel />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
