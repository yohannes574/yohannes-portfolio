import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoStrip from './components/InfoStrip'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WhatICanBuild from './components/WhatICanBuild'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InfoStrip />
        <About />
        <Skills />
        <Projects />
        <WhatICanBuild />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}