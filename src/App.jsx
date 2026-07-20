import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import SetupGuide from './components/SetupGuide'
import Interfaces from './components/Interfaces'
import WhyChoose from './components/WhyChoose'
import About from './components/About'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen font-sans selection:bg-[#D43B0C] selection:text-white transition-colors duration-300">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((v) => !v)} />
      <Hero />
      <Features />
      <SetupGuide />
      <Interfaces />
      <WhyChoose />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}
