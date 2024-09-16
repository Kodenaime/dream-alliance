import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Services from '../Components/Services'
import Features from '../Components/Features'
import Cta from '../Components/Cta'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Features />
        <Cta />
        <Contact />
        <Footer />
    </>
  )
}

export default Home