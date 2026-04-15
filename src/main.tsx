import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ShawnMendesApp } from './ShawnMendesApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShawnMendesApp />
  </StrictMode>,
)
