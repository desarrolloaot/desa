import React, { useState, useEffect } from "react";
import { Navbar, Button, Offcanvas, Card } from "react-bootstrap";

export default function SlidingSidebarLayout() {
  const MOBILE_BREAKPOINT = 1300; // px
  const TOPBAR_HEIGHT = 56;       // px
  const SIDEBAR_WIDTH = 250;      // px

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

  // Detecta si es mobile o desktop
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) setSidebarVisible(false); // desktop inicia cerrado
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Header */}
      <Navbar
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: TOPBAR_HEIGHT,
          zIndex: 1100,
          display: "flex",
          alignItems: "center",
          padding: "0 1rem",
          background: "linear-gradient(135deg, #cccccc, #0b5ed7)",
          color: "#fff",
        }}
      >
        <Button
          variant="outline-light"
          className="me-2"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          ☰
        </Button>
        <Navbar.Brand style={{ margin: 0 }}>Mi App</Navbar.Brand>
      </Navbar>

      {/* Contenedor principal */}
      <div style={{ display: "flex", flexDirection: "row", marginTop: TOPBAR_HEIGHT }}>
        {/* Sidebar Desktop */}
        {!isMobile && (
          <div
            style={{
              width: SIDEBAR_WIDTH,
              height: `calc(100vh - ${TOPBAR_HEIGHT}px)`,
              background: "#f8f9fa",
              position: "fixed",
              top: TOPBAR_HEIGHT,
              left: sidebarVisible ? 0 : -SIDEBAR_WIDTH, // desliza desde la izquierda
              overflowY: "auto",
              zIndex: 1040,
              boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
              transition: "left 0.3s ease",
              padding: "1rem",
            }}
          >
            <ul className="list-unstyled">
              <li className="mb-2">🏠 Dashboard</li>
              <li className="mb-2">⚙️ Configuración</li>
              <li className="mb-2">👥 Usuarios</li>
            </ul>
          </div>
        )}

        {/* Sidebar Mobile */}
        {isMobile && (
          <Offcanvas
            show={sidebarVisible}
            onHide={() => setSidebarVisible(false)}
            backdrop={true}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menú</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="list-unstyled">
                <li className="mb-2">🏠 Dashboard</li>
                <li className="mb-2">⚙️ Configuración</li>
                <li className="mb-2">👥 Usuarios</li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        )}

        {/* Contenido principal */}
        <main
          style={{
            flex: 1, // ocupa todo el espacio restante
            marginLeft: !isMobile && sidebarVisible ? SIDEBAR_WIDTH : 0, // empuja contenido solo en desktop
            padding: "1rem",
            height: `calc(100vh - ${TOPBAR_HEIGHT}px)`,
            overflowY: "auto",
            transition: "margin-left 0.3s ease",
          }}
        >
          <h1>Contenido principal</h1>
          <p>
            En desktop, el sidebar desplaza el contenido a la derecha. <br />
            En mobile, el sidebar hace overlay sobre el contenido.
          </p>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Ejemplo de Card</Card.Title>
              <Card.Text>Esto es un Card de ejemplo con React-Bootstrap.</Card.Text>
            </Card.Body>
          </Card>

          <div style={{ height: 1200, background: "linear-gradient(#fff, #eee)" }} />
        </main>
      </div>
    </div>
  );
}
