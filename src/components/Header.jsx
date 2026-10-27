const LINKS = [
  { href: '#work', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="Ansh Sharma, home"><span className="wordmark-mark">AS</span><span className="wordmark-divider" aria-hidden="true" /><span className="wordmark-label">Android · Java</span></a>
    <nav className="site-nav" aria-label="Primary navigation">{LINKS.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
    <a className="header-resume" href="/Ansh_Sharma_Java_Updated.pdf" target="_blank" rel="noreferrer">Java résumé</a>
  </header>
}
