import React, { useState } from 'react'
import Model from 'react-modal';


import slide2 from '../Assets/heroes.png'
import Contact from './Contact'


const Hero = () => {

  const [visible, setvisible]=useState(false)

  return (
    <section class="section hero has-bg-image" aria-label="home"
        >
        <div class="container">

          <div class="hero-content">

            <h1 class="h1 hero-title">Dream Alliance</h1>

            <p class="hero-text">
              Your Gateway to the Land of Dreams.
            </p>

            <div class="btn-wrapper">

              <a href="https://docs.google.com/forms/d/10jmt_pVGD2vj4KO7lDJvlcIXDt0Vd00q6pjDR2i_ZZ0/edit?usp=sharing_eip_se_dm&ts=66df073e" class="btn btn-primary">Check Eligibility</a>
              <div className="cont">
                  <button onClick={() => setvisible(true) } className="btn btn-outline"> Consult Now</button>
                  <Model isOpen={visible} onRequestClose={() => setvisible(false)}>
                    <Contact />
                    <button onClick={() => setvisible(false)} className="btn btn-outline">Close Form</button>
                  </Model>
              </div>
              

            </div>

          </div>

          <div className="hero-pic">
                  <figure class="hero-pic" width="575" height="550">
                    <img src={slide2}width="575" height="550" alt="" class="img-cover" />
                  </figure>
          </div>             


        </div>
      </section>
  )
}

export default Hero