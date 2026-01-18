import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import './App.css'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Footer from './components/Footer.jsx'

function App() {
  
  return (
    <Router>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
      </main>
    </Router>

  );
}

export default App
