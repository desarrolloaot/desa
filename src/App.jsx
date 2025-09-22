import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1300);

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  // 👇 Detecta cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1300);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* 🔹 TOPBAR FIJO */}
      <Navbar  variant="dark" fixed="top" className="back_topbar">
        <Container fluid>
          <Button
            variant="outline-light"
            onClick={toggleSidebar}
            className="btn-sm"
           
          >
            ☰
          </Button>
          <Navbar.Brand href="#home">Sistema Gestión de Prestadores - O.S.P.I.T.</Navbar.Brand>
          <Nav>
            <Nav.Link href="#perfil">Perfil</Nav.Link>
            <Nav.Link href="#logout">Salir</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 🔹 SIDEBAR */}
      <div
        className={`sidebar ${sidebarVisible ? "show" : "hide"} ${
          isMobile ? "mobile" : "desktop"
        }`}
      >
        <Nav className="flex-column w-100">
          <Nav.Link href="#inicio">Cta. Corriente</Nav.Link>
          <Nav.Link href="#config">Subir Factura</Nav.Link>
          <Nav.Link href="#config">Administrar</Nav.Link>
          <Nav.Link href="#ayuda">Ayuda</Nav.Link>
        </Nav>
      </div>

      {/* 🔹 CONTENIDO PRINCIPAL */}
      <div
        className={`content ${
          sidebarVisible && !isMobile ? "expanded" : "collapsed"
        }`}
      >
        <h1>Bienvenido</h1>
        <p>
          Este es el contenido principal. El sidebar empuja en pantallas grandes
          y se superpone en pantallas chicas.
        </p>
        {Array.from({ length: 50 }).map((_, i) => (
          <p key={i}>Fila de contenido #{i + 1}</p>
        ))}
      </div>
    </div>
  );
}
