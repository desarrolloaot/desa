import React from "react";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BsList } from "react-icons/bs";


export default function Topbar({ toggleSidebar }) { 	
    
    return (
        <div>
            <Navbar variant="dark" fixed="top" className="back_topbar">
            <Container fluid>
                <Button
                    variant="outline-light"
                    onClick={toggleSidebar} // ¡Ahora sí existe!
                    className="btn-sm"
                    style={{ width: "25px",padding: "0rem" }}
                >
                    <BsList size={23} />
                </Button>
                {/* ... el resto del código */}
            </Container>
            </Navbar>
        </div>
    )
}