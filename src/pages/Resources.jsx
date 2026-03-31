const resources = [
  {
    title: 'Instagram Cold Outreach Strategy',
    desc: 'DM scripts, target lists, follow-up sequences for Events and Staffing',
    file: '/docs/instagram-cold-outreach-strategy.html',
    category: 'Outreach',
  },
  {
    title: 'Events Outreach Targets',
    desc: 'Target accounts, hashtags, and venues for event security and bartending leads',
    file: '/docs/events-outreach-targets.html',
    category: 'Outreach',
  },
  {
    title: 'Staffing Outreach Targets',
    desc: 'Target companies, industries, and contacts for staffing leads',
    file: '/docs/staffing-outreach-targets.html',
    category: 'Outreach',
  },
]

export default function Resources() {
  return (
    <div className="resources">
      <div className="resources-header">
        <h1>Resources</h1>
        <p>Strategy docs, outreach templates, and brand guides</p>
      </div>
      <div className="resources-grid">
        {resources.map((res) => (
          <a
            key={res.title}
            href={res.file}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-card"
          >
            <span className="resource-category">{res.category}</span>
            <h3>{res.title}</h3>
            <p>{res.desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
