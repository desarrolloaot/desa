import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import  { useState, useEffect } from "react";
import { API_BASE_URL } from "../config/config";


export default function Sidebar({ sidebarVisible, isMobile }) {
  
    const [apps, setApps] = useState([]);

        useEffect(() => {
            fetch(`${API_BASE_URL}/Sidebar/apps.php`)
            .then(res => res.json())
            .then(data => setFacturas(data));
        }, []);

  
    return (

      

    <div className={`sidebar ${sidebarVisible ? "show" : "hide"} ${isMobile ? "mobile" : "desktop"}`}>
      <Nav className="flex-column w-100 font-roboto">
        <Nav.Link as={NavLink} to="/" end>
          <i className="bi bi-house"></i> Inicio
        </Nav.Link>
        <Nav.Link as={NavLink} to="/SubirFactura">
          <i className="bi bi-receipt-cutoff"></i> Subir Factura
        </Nav.Link>
        <Nav.Link as={NavLink} to="/AdministrarFactura">
          <i className="bi bi-activity"></i> Administrar Factura
        </Nav.Link>
        <Nav.Link as={NavLink} to="/CuentaCorriente">
          <i className="bi bi-bank"></i> Cuenta Corriente
        </Nav.Link>
        <Nav.Link as={NavLink} to="/CuentaCorriente">
        <i className="bi bi-question-circle"> Ayuda</i>
        </Nav.Link>
      </Nav>
    </div>
  );
}
