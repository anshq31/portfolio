import { education, leadership } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Credentials() {
  const [ref, visible] = useReveal()
  return <section id="education" className="section-shell content-section credentials-section">
    <div className="section-intro"><h2>Education &amp; community</h2><p>Computer science foundations and a track record of helping others build.</p></div>
    <div ref={ref} className={'credentials-grid' + (visible ? ' is-visible' : '')}>
      <article><p className="credential-period">{education.period}</p><h3>{education.degree}</h3><p>{education.school} · {education.location}</p><p className="credential-note">{education.note}</p></article>
      <article><p className="credential-period">COMMUNITY / CPBYTE</p><h3>{leadership.role}</h3><p>{leadership.org}</p><ul className="entry-bullets">{leadership.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>
    </div>
  </section>
}
