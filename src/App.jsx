import React from 'react'
import Navbar from '../src/Components/Navbar'
import Hero from '../src/Components/Hero'
import About from '../src/Components/About'
import Tour from '../src/Components/Tour'
import Journey from '../src/Components/Journey'
import Discover from '../src/Components/Discover'
import Footer from '../src/Components/Footer'

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Tour />
        <Journey />
        <Discover />
        <Footer />
    </>
  )
}

export default App