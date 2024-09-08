import React from 'react'
import Navbar from '../src/Components/Navbar/Navbar'
import Hero from '../src/Components/Hero/Hero'
import About from '../src/Components/About/About'
import Tour from '../src/Components/Tour/Tour'
import Journey from '../src/Components/Journey/Journey'
import Discover from '../src/Components/Discover/Discover'
import Footer from '../src/Components/Footer/Footer'

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