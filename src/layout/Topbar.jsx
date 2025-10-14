import React from "react";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";




export default function Topbar({ toggleSidebar, brandName, userIcon, userName }) {
    return (
      <Navbar variant="dark" fixed="top" className="back_topbar">
      
      {/* Botón a la izquierda */}
      <Button variant="primary" onClick={toggleSidebar}>
        <i className="bi-list"></i>
      </Button>
      <div class="ps-2 text-light">Prestadores O.S.P.I.T.</div>

      {/* Espaciador flexible */}
     

      {/* BrandName y usuario a la derecha */}
      <div className="d-flex align-items-center">
       
        {userIcon}
        <span className="ms-1 text-light">{userName}</span>
      </div>
    </Navbar>
    );
  }