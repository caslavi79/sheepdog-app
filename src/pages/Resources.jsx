const resources = [
  {
    title: 'Color Palette',
    desc: 'Primary, secondary, accent, and neutral colors with hex codes and usage guidance',
    file: '/docs/Sheepdog_01_Color_Palette.html',
    category: 'Brand',
  },
  {
    title: 'Typography System',
    desc: 'Heading and body fonts, type scale, sizes, weights, and spacing',
    file: '/docs/Sheepdog_02_Typography_System.html',
    category: 'Brand',
  },
  {
    title: 'Visual Standards Guide',
    desc: 'Logo usage, color application, imagery style, and file format rules',
    file: '/docs/Sheepdog_03_Visual_Standards_Guide.html',
    category: 'Brand',
  },
  {
    title: 'Events Brand Identity',
    desc: 'Positioning, voice, messaging pillars, and visual expression for Sheepdog Events',
    file: '/docs/Sheepdog_04_Events_Brand_Identity.html',
    category: 'Brand',
  },
  {
    title: 'Staffing Brand Identity',
    desc: 'Positioning, voice, messaging pillars, and visual expression for Sheepdog Staffing',
    file: '/docs/Sheepdog_05_Staffing_Brand_Identity.html',
    category: 'Brand',
  },
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
