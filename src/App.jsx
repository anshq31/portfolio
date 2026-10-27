import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  return <div className="portfolio-shell"><Header /><main><Hero /><Experience /><Projects /><Skills /><Credentials /></main><Contact /></div>
}
