import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import { AuthProvider } from './contexts/AuthContext'
import "./index.css"
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AuthProvider>
  </StrictMode>,
)
