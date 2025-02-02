// Estas son importaciones que se instalaron con npm create vite@latest
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Estas son importaciones de archivos que se crearon en el proyecto
import App from './components/App.jsx'
// Esta es una importacion de estilos
import './index.css'

// Este es el punto de entrada de la aplicacion
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
