import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mymonorepo/ui-components/dist/index.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
) 