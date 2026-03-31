import { useLocation } from 'react-router-dom'

export default function Placeholder() {
  const location = useLocation()
  const name = location.pathname.replace('/', '').replace(/-/g, ' ')

  return (
    <div className="placeholder">
      <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
      <p>This module is being built. Check back soon.</p>
    </div>
  )
}
