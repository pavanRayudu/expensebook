import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import { ProtectedRoute } from './components/ProtectedRoute.jsx'
import { AuthContextProvider } from './components/context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<App />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
