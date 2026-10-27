import { profile } from '../data/content'
import { useScrollAssembly } from '../hooks/useScrollAssembly'

export default function Hero() {
  const [stageRef, assembled] = useScrollAssembly(0.25)
  return <section id="top" className="hero section-shell">
    <div className="hero-copy">
      <p className="hero-location"><span className="status-light" />{profile.location}<span className="location-divider">/</span>Open to Android &amp; Java roles</p>
      <h1>Ansh<br />Sharma<span className="hero-period">.</span></h1>
      <p className="hero-role">Android &amp; Java engineer</p>
      <p className="hero-summary">I build Android products and the Java systems behind them—from live Play Store apps and a 29-endpoint sports platform to end-to-end palm-vein verification.</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">View selected work</a><a className="button button-text" href={'mailto:' + profile.email}>Get in touch</a></div>
      <div className="resume-links" aria-label="Download resumes">
        <a href="/Ansh_Sharma_Resume.pdf" target="_blank" rel="noreferrer">Android + backend résumé <span>Download PDF</span></a>
        <a href="/Ansh_Sharma_Java_Updated.pdf" target="_blank" rel="noreferrer">Java backend résumé <span>Download PDF</span></a>
      </div>
    </div>
    <figure ref={stageRef} className={'system-map' + (assembled ? ' is-assembled' : '')} aria-label="Engineering flow from Android clients through Spring Boot services to data and device integrations">
      <div className="map-heading"><span>ENGINEERING SYSTEMS</span><span>Delhi NCR · India</span></div>
      <div className="map-canvas">
        <svg className="map-wiring" viewBox="0 0 600 430" aria-hidden="true">
          <path d="M228 105H370M228 325H370M145 140V290M455 140V290M228 105H300V325H370" />
          <circle cx="300" cy="105" r="4" /><circle cx="300" cy="325" r="4" />
        </svg>
        <div className="map-node map-mobile"><span className="map-node-index">01 / MOBILE</span><strong>Android</strong><small>Kotlin · Compose</small></div>
        <div className="map-node map-services"><span className="map-node-index">02 / SERVICES</span><strong>Spring Boot</strong><small>APIs · security</small></div>
        <div className="map-node map-native"><span className="map-node-index">03 / INTEGRATION</span><strong>Native systems</strong><small>C · JNA · Electron</small></div>
        <div className="map-node map-data"><span className="map-node-index">04 / DATA</span><strong>PostgreSQL</strong><small>PostGIS · Redis</small></div>
        <span className="map-fragment map-fragment-one" aria-hidden="true" /><span className="map-fragment map-fragment-two" aria-hidden="true" /><span className="map-fragment map-fragment-three" aria-hidden="true" />
      </div>
      <figcaption className="map-caption"><strong>One engineer, end to end.</strong><span>Interfaces, services, and the systems between them.</span></figcaption>
    </figure>
    <div className="hero-footnote"><span>Scroll to explore</span><i aria-hidden="true" /></div>
  </section>
}
