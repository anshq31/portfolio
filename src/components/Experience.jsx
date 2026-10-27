import { experience } from '../data/content'
import { useScrollAssembly } from '../hooks/useScrollAssembly'

function Entry({ job }) {
  const [ref, assembled] = useScrollAssembly()
  return <article ref={ref} className={'entry-block build-fragment' + (assembled ? ' is-built' : '')}>
    <div className="entry-date">{job.period}</div>
    <div className="entry-content">
      <div className="entry-title-row"><h3>{job.role}</h3><p>{job.company}<span> · </span>{job.location}</p></div>
      <p className="entry-project">{job.project}</p>
      <ul className="entry-bullets">{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
      {job.link && <a className="inline-link" href={job.link.href} target="_blank" rel="noreferrer">{job.link.label}</a>}
    </div><span className="entry-rail" aria-hidden="true" />
  </article>
}

export default function Experience() {
  return <section id="work" className="section-shell content-section">
    <div className="section-intro"><h2>Experience</h2><p>Product work across mobile, desktop, and backend systems.</p></div>
    <div className="entry-list">{experience.map((job) => <Entry key={job.company} job={job} />)}</div>
  </section>
}
