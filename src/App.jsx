import React from 'react'
import Navbar from '../src/Components/Navbar'
import Hero from '../src/Components/Hero'
import About from '../src/Components/About'
import Services from '../src/Components/Services'
import Features from '../src/Components/Features'
import Cta from '../src/Components/Cta'
import Contact from '../src/Components/Contact'
import Footer from '../src/Components/Footer'
import Vis from '../src/Components/Vis'

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Vis />
        <About />
        <Services />
        <Features />
        <Cta />
        <Contact />
        <Footer />
    </>
  )
}

export default App