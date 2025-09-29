import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Topbar from "./layout/Topbar";
import Sidebar from "./layout/Sidebar";
import MainLayout from "./layout/MainLayout";

// Lazy load de páginas
const FormSubir = lazy(() => import("./features/SubirFacturas/FormSubir"));

export default function App() {
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
      {/* 🔹 Topbar siempre visible, fuera del Router */}
      <Topbar toggleSidebar={toggleSidebar} />

      <div className="d-flex flex-grow-1">
        <Router>
          {/* 🔹 Sidebar dentro del Router */}
          <Sidebar sidebarVisible={sidebarVisible} isMobile={isMobile} />


          <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
              <Route element={<MainLayout sidebarVisible={sidebarVisible} isMobile={isMobile} /> } >
                	<Route index element={<div>Bienvenido a la aplicación</div>} />
                	<Route path="/SubirFactura" element={<FormSubir />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </div>
    </div>
  );
}
