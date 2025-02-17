import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WeatherDashboard from './pages/Inicio'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<WeatherDashboard />} />
    </Routes>
  </BrowserRouter>
)
