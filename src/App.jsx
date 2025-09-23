import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsList } from "react-icons/bs";

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
            className="btn-sm text-warning"
            style={{ width: "25px",padding: "0rem" }}
            
           
          >
            <BsList size={18} />
          </Button>
          <Navbar.Brand href="#home" className="text-white fs-6">Sistema Gestión de Prestadores - O.S.P.I.T.</Navbar.Brand>
          <Nav>
          <Nav.Link><i class="bi bi-person-bounding-box fs-5 text-light"></i></Nav.Link>
            
            <Nav.Link href="#logout"  className="d-flex align-items-center text-warning">Salir</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 🔹 SIDEBAR */}
      <div
        className={`sidebar ${sidebarVisible ? "show" : "hide"} ${
          isMobile ? "mobile" : "desktop"
        }`}
      >
        <Nav className="flex-column w-100 font-roboto">
          <Nav.Link href="#inicio">Cta. Corriente</Nav.Link>
          <Nav.Link href="#config">Subir Factura</Nav.Link>
          <Nav.Link href="#config">Administrar</Nav.Link>
          <Nav.Link href="#ayuda">Ayuda</Nav.Link>
        </Nav>
      </div>

      {/* 🔹 CONTENIDO PRINCIPAL */}
      <div
        className={`content font-roboto ${
          sidebarVisible && !isMobile ? "expanded" : "collapsed"
        }` } 
      >
        <h1>Bienvenido</h1>
        <p>
          Este es el contenido principal. El sidebar empuja en pantallas grandes
          y se superpone en pantallas chicas.
        </p>
            <div className="d-flex">
            <Card style={{ width: '18rem' }} className="bg-primary-subtle me-2">
              <Card.Header>Featured</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
          </Card>
          <Card style={{ width: '18rem' }} className="bg-success-subtle me-2">
              <Card.Header>Featured</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
          </Card>
          <Card style={{ width: '18rem' }} className="bg-danger-subtle">
              <Card.Header>Featured</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
          </Card>
          </div>
      </div>
    </div>
  );
}
