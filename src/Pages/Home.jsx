import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Services from '../Components/Services'
import Features from '../Components/Features'
import Cta from '../Components/Cta'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Features />
        <About />
        <Services />        
        <Cta />
        <Footer />
    </>
  )
}

export default Home