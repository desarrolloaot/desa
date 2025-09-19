import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "primereact/resources/themes/lara-light-cyan/theme.css";  // Tema oscuro
import "primereact/resources/primereact.min.css";                  // Estilos base
import "primeicons/primeicons.css";                                // Íconos
import 'primeflex/themes/primeone-light.css';                      // Tema de colores de PrimeFlex
import 'primeflex/primeflex.css';                                  // Clases de utilidad para el layout (solo una vez)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
