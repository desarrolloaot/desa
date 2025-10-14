// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Topbar from "./layout/Topbar";
import Sidebar from "./layout/Sidebar";
import AppRouter from "./routes/AppRouter";
import useSidebar from "./hooks/useSidebar";

export default function App() {
  const { sidebarVisible, isMobile, toggleSidebar } = useSidebar();

  return (
    <Router>
      <div className="d-flex flex-column vh-100">
        {/* Topbar siempre visible */}
        <Topbar  toggleSidebar={toggleSidebar}  brandName="Prestadores O.S.P.I.T."  userIcon={<i className="bi-person-circle"></i>}  userName="Fciccone" />

        {/* Contenedor principal */}
        <div className="d-flex flex-grow-1">
          {/* Sidebar */}
          <Sidebar sidebarVisible={sidebarVisible} isMobile={isMobile} />

          {/* Contenido según rutas */}
          <AppRouter sidebarVisible={sidebarVisible} isMobile={isMobile} />
        </div>
      </div>
    </Router>
  );
}
