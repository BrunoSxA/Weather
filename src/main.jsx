import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WeatherDashboard from './pages/Inicio'
import Test from './test/Test'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<WeatherDashboard />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </BrowserRouter>
)
