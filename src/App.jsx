import React from 'react'
import Navbar from '../src/Components/Navbar'
import Hero from '../src/Components/Hero'
import About from '../src/Components/About'
import Services from '../src/Components/Services'
import Features from '../src/Components/Features'
import Contact from '../src/Components/Contact'
import Footer from '../src/Components/Footer'

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Features />
        <Contact />
        <Footer />
    </>
  )
}

export default App