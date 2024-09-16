import React from 'react'
import Navbar from '../Components/Navbar'
import Services from '../Components/Services'
import Footer from '../Components/Footer'
import Vis from '../Components/Vis'
import Under from '../Components/under'

const Home = () => {
  return (
    <>
        <Navbar />
        <Vis />
        <Under />
        <Services />
        <Footer />
    </>
  )
}

export default Home