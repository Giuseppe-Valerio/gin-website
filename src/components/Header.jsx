// src/components/Header.js

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="header-navbar px-3 py-2">
      <Container fluid="md">
        {/* Logo + Nome */}
        <Navbar.Brand href="#home" className="d-flex align-items-center header-brand">
          <img
            src={logo}
            alt="Logo Distilleria Casale della Montagna"
            width="40"
            height="40"
            className="header-logo me-2"
          />
          <div className="header-brand-text">
            <div className="header-brand-line1">DISTILLERIA</div>
            <div className="header-brand-line2">CASALE DELLA MONTAGNA</div>
          </div>
        </Navbar.Brand>

        {/* Menu Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Menu Collapsato */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#products" className="mx-2 header-nav-link">
              Prodotti
            </Nav.Link>
            <Nav.Link href="#about" className="mx-2 header-nav-link">
              Chi Siamo
            </Nav.Link>
            <Nav.Link href="#gallery" className="mx-2 header-nav-link">
              Galleria
            </Nav.Link>
            <Nav.Link href="#contact" className="mx-2 header-nav-link">
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
