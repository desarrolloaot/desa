import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import routes from "../commons/routes.json"; // Importa tus rutas dinámicas

export default function Sidebar({ sidebarVisible, isMobile }) {
  // Si es móvil y el sidebar está oculto → no renderiza nada
  if (isMobile && !sidebarVisible) return null;

  return (
    <div className={`sidebar ${sidebarVisible ? "show" : "hide"} ${isMobile ? "mobile" : "desktop"}`}>
      <Nav className="flex-column w-100 font-roboto">
        {routes.map((route) => (
          <Nav.Link
            as={NavLink}
            to={route.path}
            key={route.path}
            end={route.path === "/"} // Solo el index usa `end`
          >
            {route.icon && <i className={`bi ${route.icon}`}></i>}{" "}
            {route.label}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
}
