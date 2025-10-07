import React from "react";
import { Outlet,useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default function MainLayout({ sidebarVisible, isMobile }) {

    const location = useLocation();
    const routeTitles = {
        "/": "Inicio",
        "/SubirFactura": "Subir Factura",
        "/AdministrarFactura": "Administrar Factura",
        "/CuentaCorriente": "Cuenta Corriente",
        "/Ayuda": "Ayuda",
      };

      const routeIcons = {
        "/": "bi-house",
        "/SubirFactura": "bi-receipt-cutoff",
        "/AdministrarFactura": "bi-activity",
        "/CuentaCorriente": "bi-bank",
        "/Ayuda": "bi-question-circle",
      };
      const title = routeTitles[location.pathname] || "";
      const icon = routeIcons[location.pathname] || "bi-file";
      
  return (
    <main key={location.key}
      className={`content ${
        sidebarVisible && !isMobile ? "expanded" : "collapsed"
      }`}
    >
    <Container fluid>
  <div className=" d-flex align-items-center mb-4 rounded shadow-sm  border ps-1">
    <i className={`bi ${icon} fs-3 me-3 text-primary`}></i>
    <h5 className="m-0 fw-bold">{title}</h5>
  </div>
</Container>
      <Outlet />
    </main>
  );
}