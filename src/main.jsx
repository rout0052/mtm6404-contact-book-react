import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wraps the App in the RouterProvider to use the router in the app */}
    <RouterProvider router={ router }>
      <App />
    </RouterProvider>
  </StrictMode>,
)
