import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"; 

import Topbar from "../layout/Topbar";
import Sidebar from "../layout/Sidebar";

export default function MainLayout() {
    
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1300);

    const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1300);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="d-flex flex-column vh-100">
            {/* 2. Pasar toggleSidebar como prop a Topbar */}
            <Topbar toggleSidebar={toggleSidebar} /> 
            <div className="d-flex flex-grow-1">
                {/* 3. Pasar estados como props a Sidebar */}
                <Sidebar 
                    sidebarVisible={sidebarVisible} 
                    isMobile={isMobile} 
                />
                <main
                    className={`content ${
                    sidebarVisible && !isMobile ? "expanded" : "collapsed"
                    }`}
                >
                    <h1>Bienvenido</h1>
                    <p>
                    Este es el contenido principal. El sidebar empuja en pantallas grandes
                    y se superpone en pantallas chicas.
                    </p>
                    {Array.from({ length: 50 }).map((_, i) => (
                    <p key={i}>Fila de contenido #{i + 1}</p>
                    ))}
                    <Outlet />
                </main>
                
            </div>
        </div>
    );
}