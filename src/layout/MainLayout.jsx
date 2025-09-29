import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout({ sidebarVisible, isMobile }) {
  return (
    <main
      className={`content ${
        sidebarVisible && !isMobile ? "expanded" : "collapsed"
      }`}
    >
      <Outlet />
    </main>
  );
}