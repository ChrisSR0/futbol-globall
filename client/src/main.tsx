import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// vy a usar el componente prncipal de la app lo traigo aqui para que el cerero main.tsx lo use
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
