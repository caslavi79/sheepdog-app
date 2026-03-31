import { Link } from 'react-router-dom'

const modules = [
  {
    title: 'Resources',
    desc: 'Strategy docs, outreach templates, brand guides',
    path: '/resources',
    icon: '📁',
    ready: true,
  },
  {
    title: 'Scheduling',
    desc: 'Events and staffing calendars',
    path: '/scheduling',
    icon: '📅',
    ready: false,
  },
  {
    title: 'Clients',
    desc: 'Client records, pipeline, contracts',
    path: '/clients',
    icon: '👥',
    ready: false,
  },
  {
    title: 'Financials',
    desc: 'Revenue tracking, invoicing',
    path: '/financials',
    icon: '💰',
    ready: false,
  },
  {
    title: 'Compliance',
    desc: 'Licensing, TABC, contractor paperwork',
    path: '/compliance',
    icon: '📋',
    ready: false,
  },
  {
    title: 'Reviews',
    desc: 'QR codes, scripts, templates, strategy',
    path: '/reviews',
    icon: '⭐',
    ready: false,
  },
]

export default function Hub() {
  return (
    <div className="hub">
      <div className="hub-header">
        <h1>Sheepdog HQ</h1>
        <p>Operations dashboard for Sheepdog Security LLC</p>
      </div>
      <div className="hub-grid">
        {modules.map((mod) => (
          <Link
            key={mod.title}
            to={mod.ready ? mod.path : '#'}
            className={`hub-card ${mod.ready ? '' : 'hub-card--locked'}`}
            onClick={(e) => !mod.ready && e.preventDefault()}
          >
            <div className="hub-card-icon">{mod.icon}</div>
            <h2>{mod.title}</h2>
            <p>{mod.desc}</p>
            {!mod.ready && <span className="hub-card-badge">Coming Soon</span>}
          </Link>
        ))}
      </div>
    </div>
  )
}
