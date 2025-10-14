import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import routes from "../commons/routes.json";

export default function MainLayout({ sidebarVisible, isMobile }) {
  const location = useLocation();

  // Buscar en routes.json la ruta actual
  const currentRoute = routes.find((r) => r.path === location.pathname);

  // Si existe, usamos su ícono y título, si no, valores por defecto
  const icon = currentRoute?.icon || "bi-file-earmark";
  const title = currentRoute?.label || "Sin título";

  return (
    <main
      key={location.key}
      className={`content ${
        sidebarVisible && !isMobile ? "expanded" : "collapsed"
      }`}
    >
      <Container fluid>
        <div className="d-flex align-items-center mb-4 rounded shadow-sm border ps-1">
          <i className={`bi ${icon} fs-3 me-3 text-primary`}></i>
          <h5 className="m-0 fw-bold">{title}</h5>
        </div>
      </Container>

      {/* Aquí se renderiza el contenido de la ruta */}
      <Outlet />
    </main>
  );
}
