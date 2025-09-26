
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ListGroup from 'react-bootstrap/ListGroup';
import { BsList } from "react-icons/bs";


export default function Sidebar({ sidebarVisible, isMobile }) {
  

    return (
        <div>
            {/* 🔹 SIDEBAR */}
            <div className={`sidebar ${sidebarVisible ? "show" : "hide"} ${isMobile ? "mobile" : "desktop"}`}>
                <Nav className="flex-column w-100 font-roboto">
                    <Nav.Link href="#SubirFactura"><i className="bi bi-bank"></i> Cta. Corriente</Nav.Link>
                    <Nav.Link href="#SubirFactura"><i className="bi bi-receipt-cutoff"></i> Subir Factura</Nav.Link>
                    <Nav.Link href="#SubirFactura"><i className="bi bi-activity"></i> Administrar</Nav.Link>
                    <Nav.Link href="#SubirFactura"><i className="bi bi-question-circle"></i> Ayuda</Nav.Link>
                </Nav>
            </div>
        </div> 
        )
    }