import React from "react";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BsList } from "react-icons/bs";
import Circle from "./Circle";


export default function Topbar({ toggleSidebar }) { 	
    
    return (
        <div>
            <Navbar variant="dark" fixed="top" className="back_topbar">
            <Button
                    variant="outline-light"
                    onClick={toggleSidebar} // ¡Ahora sí existe!
                    className="btn-sm"
                    style={{ width: "25px",padding: "0rem" }}
                >
                    <BsList size={20} />
                </Button>
            <Container fluid className="text-white"> Prestadores O.S.P.I.T.
                
                {/* ... el resto del código */}
            </Container>
            <span className="ms-auto d-flex align-items-center text-light pe-3">
              <Circle className="me-2"/>
                Salir
            </span>
            </Navbar>
        </div>
    )
}