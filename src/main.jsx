import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import { ProtectedRoute } from './components/ProtectedRoute.jsx'
import { AuthContextProvider, useAuth } from './components/context/AuthContext.jsx'
import ExpenseList from './components/sections/ExpenseList.jsx'
import ExpenseContext, { ExpenseContextProvider } from './components/context/ExpenseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthContextProvider>
      <ExpenseContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute>
              <App />
            </ProtectedRoute>} />
            <Route path="/transactions" element={<ExpenseList />} />


          </Routes>
        </BrowserRouter>
      </ExpenseContextProvider>

    </AuthContextProvider>
  </React.StrictMode>,
)
