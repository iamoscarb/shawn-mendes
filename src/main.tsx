import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeaderMenu } from './shared/components/Layout/HeaderMenu.tsx'
import App from './App.tsx'
import { Footer } from './shared/components/Layout/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderMenu />
    <App />
    <Footer />
  </StrictMode>,
)
