import { skills } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  const [ref, visible] = useReveal(0.12)
  return <section id="stack" className="section-shell content-section stack-section">
    <div className="section-intro"><h2>Technical stack</h2><p>Tools I use to build, connect, and ship software.</p></div>
    <div ref={ref} className={'stack-sheet' + (visible ? ' is-visible' : '')}>
      {skills.map((group) => <div className="stack-row" key={group.group}><h3>{group.group}</h3><ul className="tag-row">{group.items.map((item) => <li key={item} className="tag">{item}</li>)}</ul></div>)}
    </div>
  </section>
}
