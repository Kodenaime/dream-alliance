import React from 'react'
import '../../src/index.css'

import bg from '../Assets/bg.png'

const Hero = () => {
  return (
    <section class="hero" id="home">
    <div class="container">

      <div class="hero-content">

        <h1 class="h1 hero-title">Your best travel agency agency</h1>

        <p class="hero-text">
          Capture and retrieve your lists across devices to help you stay organized at work, home, and on the go.
        </p>

        <a href="https://docs.google.com/forms/d/10jmt_pVGD2vj4KO7lDJvlcIXDt0Vd00q6pjDR2i_ZZ0/edit?usp=sharing_eil_se_dm&ts=66df073e" class="btn btn-primary">Get started</a>

      </div>

      <div class="hero-banner"></div>

    </div>

    <img src={bg} alt="shape" class="shape-content" />
  </section>

  )
}

export default Hero