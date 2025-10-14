import { useState, useEffect } from "react";

export default function useSidebar(breakpoint = 1300) {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return { sidebarVisible, isMobile, toggleSidebar };
}