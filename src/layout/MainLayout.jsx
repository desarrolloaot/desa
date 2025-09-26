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
                <main className="flex-grow-1 p-3 bg-light">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}