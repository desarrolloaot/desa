import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import routes from "../commons/routes.json";
import MainLayout from "../layout/MainLayout";


const lazyComponents = {};


routes.forEach((r) => {
 
  const folder = r.path.replace("/", ""); 
  lazyComponents[r.component] = lazy(() =>
    import(`../features/${folder}/${r.component}.jsx`)
  );
});



export default function AppRouter({ sidebarVisible, isMobile }) {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route
          element={
            <MainLayout sidebarVisible={sidebarVisible} isMobile={isMobile} />
          }
        >
			 <Route index element={<Navigate to="/Home" replace />} />
          {routes.map((r, i) => {
            const Component = lazyComponents[r.component]; 
            return <Route key={i} path={r.path} element={<Component />} />;
          })}
        </Route>
      </Routes>
    </Suspense>
  );
}
