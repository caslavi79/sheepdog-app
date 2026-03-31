import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Layout() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <img src="/sheepdog-stacked-white.svg" alt="Sheepdog" className="sidebar-logo" />
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/" end className="sidebar-link">Dashboard</NavLink>
          <NavLink to="/resources" className="sidebar-link">Resources</NavLink>
          <NavLink to="/scheduling" className="sidebar-link">Scheduling</NavLink>
          <NavLink to="/clients" className="sidebar-link">Clients</NavLink>
          <NavLink to="/financials" className="sidebar-link">Financials</NavLink>
          <NavLink to="/compliance" className="sidebar-link">Compliance</NavLink>
        </nav>
        <button onClick={handleLogout} className="sidebar-logout">Log Out</button>
      </aside>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}
