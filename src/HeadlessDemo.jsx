import React, { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

export default function SlidingSidebarLayout() {
    const MOBILE_BREAKPOINT = 1300; // px
    const TOPBAR_HEIGHT = 56; // px

    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

    // Detecta automáticamente si es mobile o desktop y ajusta el sidebar
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < MOBILE_BREAKPOINT;
            setIsMobile(mobile);
            setSidebarVisible(!mobile); // si es mobile => false (cerrado), si no => true (abierto)
        };

        handleResize(); // lo ejecuta al montar
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const topbarStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: TOPBAR_HEIGHT,
        background: "#0b5ed7",
        color: "#fff",
        zIndex: 1100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
    };

    const contentStyle = {
        marginTop: TOPBAR_HEIGHT,
        marginLeft: !isMobile && sidebarVisible ? 250 : 0, // solo push en desktop
        transition: "margin-left 0.3s ease",
        padding: "1rem",
        overflow: "auto",
        height: `calc(100vh - ${TOPBAR_HEIGHT}px)`,
    };

    return (
        <div>
            {/* Topbar */}
            <header style={topbarStyle}>
                <div className="flex align-items-center">
                    <Button
                        icon="pi pi-bars"
                        className="p-button-text p-button-plain mr-2"
                        onClick={() => setSidebarVisible(true)}
                    />
                    <h3 style={{ margin: 0 }}>Mi App</h3>
                </div>
                <Button
                    label={sidebarVisible ? "Ocultar menú" : "Mostrar menú"}
                    onClick={() => setSidebarVisible(!sidebarVisible)}
                    className="p-button-sm p-button-outlined"
                />
            </header>

            {/* Sidebar oficial de PrimeReact */}
            <Sidebar
                visible={sidebarVisible}
                onHide={() => setSidebarVisible(false)}
                baseZIndex={1000}
                position="left"
                showCloseIcon={false}
                style={{ width: "250px", paddingTop: `${TOPBAR_HEIGHT}px` }}
                modal={isMobile} // 👈 en mobile hace overlay, en desktop es fijo
            >
                <ul className="list-none p-0 m-0">
                    <li className="mb-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer hover:surface-300 border-round">
                            <i className="pi pi-home mr-2"></i>
                            Dashboard
                        </a>
                    </li>
                    <li className="mb-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer hover:surface-300 border-round">
                            <i className="pi pi-cog mr-2"></i>
                            Configuración
                        </a>
                    </li>
                    <li className="mb-2">
                        <a className="p-ripple flex align-items-center p-2 cursor-pointer hover:surface-300 border-round">
                            <i className="pi pi-users mr-2"></i>
                            Usuarios
                        </a>
                    </li>
                </ul>
            </Sidebar>

            {/* Contenido principal */}
            <main style={contentStyle}>
                <h1>Contenido principal</h1>
                <p>
                    El contenido se ajusta al espacio disponible.  
                    En desktop el sidebar empuja, en mobile hace overlay.
                </p>
                <div style={{ height: 1200, background: "linear-gradient(#fff, #eee)" }} />
            </main>
        </div>
    );
}
