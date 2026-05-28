// arranque y entorno de react
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// estilos 
import './index.css'
import App from './App.jsx'

// contenedor html y renderizado de la web
createRoot(document.getElementById('root')).render(

  // deteccion de errores 
  <StrictMode>
    <App />
  </StrictMode>,
)