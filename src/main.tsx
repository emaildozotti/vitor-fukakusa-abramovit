// ════ FONTSOURCE — SUBSTITUIR POR CLIENTE ════
// Trocar os imports abaixo pelas fontes definidas no design-system.json
// tokens.typography.font-display.fontsource_imports[]
// tokens.typography.font-sans.fontsource_imports[]
import '@fontsource/spectral/400.css'
import '@fontsource/spectral/600.css'
import '@fontsource/spectral/700.css'
import '@fontsource/source-sans-3/400.css'
import '@fontsource/source-sans-3/500.css'
import '@fontsource/source-sans-3/600.css'
// ════ FIM FONTSOURCE ════

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
