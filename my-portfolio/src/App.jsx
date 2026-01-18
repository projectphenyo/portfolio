import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import './App.css'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'

function App() {
  

  return (
    <div className="text-sm md:text-lg">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
