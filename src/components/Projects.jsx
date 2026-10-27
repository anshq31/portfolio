import { projects } from '../data/content'
import { useScrollAssembly } from '../hooks/useScrollAssembly'

function ProjectCard({ project }) {
  const [ref, assembled] = useScrollAssembly()
  return <article ref={ref} className={'project-card build-fragment' + (assembled ? ' is-built' : '')}>
    <div className="project-topline"><span>{project.kind || 'PROJECT / ENGINEERING'}</span><span className="project-tag">{project.tag}</span></div>
    <h3>{project.name}</h3>
    <ul className="project-bullets">{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
    <ul className="tag-row" aria-label={'Technology used in ' + project.name}>{project.stack.map((item) => <li key={item} className="tag">{item}</li>)}</ul>
    <div className="project-links">{project.links.map((link) => <a key={link.label} className="inline-link" href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div>
  </article>
}

export default function Projects() {
  return <section id="projects" className="section-shell content-section projects-section">
    <div className="section-intro"><h2>Selected work</h2><p>Real systems, clear ownership, and the details behind the interface.</p></div>
    <div className="project-grid">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
  </section>
}
