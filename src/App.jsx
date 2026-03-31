import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'
import Login from './pages/Login'
import Hub from './pages/Hub'
import Placeholder from './pages/Placeholder'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route index element={<Hub />} />
          <Route path="resources" element={<Placeholder />} />
          <Route path="scheduling" element={<Placeholder />} />
          <Route path="clients" element={<Placeholder />} />
          <Route path="financials" element={<Placeholder />} />
          <Route path="compliance" element={<Placeholder />} />
          <Route path="reviews" element={<Placeholder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
