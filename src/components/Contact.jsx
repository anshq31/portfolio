import { profile } from '../data/content'
import { useReveal } from '../hooks/useReveal'

const LINKS = [
  { label: 'Email', value: profile.email, href: 'mailto:' + profile.email },
  { label: 'Phone', value: profile.phone, href: 'tel:' + profile.phone.replace(/\s+/g, '') },
  { label: 'LinkedIn', value: 'linkedin.com/in/ansh-sharma-6595a82b3', href: profile.linkedin },
  { label: 'GitHub', value: 'github.com/anshq31', href: profile.github },
  { label: 'LeetCode', value: 'leetcode.com/u/ansh1jan2005', href: profile.leetcode },
]

export default function Contact() {
  const [ref, visible] = useReveal(0.1)
  return <footer id="contact" className="contact-section">
    <div ref={ref} className={'contact-inner' + (visible ? ' is-visible' : '')}>
      <div><h2>Let’s build<br />something useful.</h2><p className="contact-note">Available for Android and Java engineering opportunities.</p></div>
      <a className="button button-primary contact-cta" href={'mailto:' + profile.email}>Email Ansh</a>
      <ul className="contact-links">{LINKS.map((link) => <li key={link.label}><a href={link.href} target="_blank" rel="noreferrer"><span>{link.label}</span><strong>{link.value}</strong></a></li>)}</ul>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Ansh Sharma</span><span>Android · Java · Systems</span><a href="#top">Back to top</a></div>
    </div>
  </footer>
}
