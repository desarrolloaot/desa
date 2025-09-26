import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import FormSubir from "./features/SubirFacturas/FormSubir";
import React, { Suspense, lazy } from "react";
const UploadInvoicePage = lazy(() => import("./features/SubirFacturas/FormSubir"));


export default function App() {
  return (
    <Router>
      <Routes>
          {/* 🔹 Ruta raíz que envuelve todo con MainLayout */}
        <Route element={<MainLayout />}>
          <Route index element={<div>Bienvenido a la aplicación</div>} />

          {/* 👇 Estas páginas van a entrar como children en MainLayout */}

          <Route path="/SubirFactura" element={<FormSubir/>} />
        
        </Route>
      </Routes>
    </Router>
  );
}