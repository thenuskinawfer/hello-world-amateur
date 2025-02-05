import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Button.jsx'
import IntroDivider from './DisplayCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IntroDivider />
  </StrictMode>,
)
