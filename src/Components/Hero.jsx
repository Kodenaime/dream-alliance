import React, { useState } from 'react'
import Model from 'react-modal';


import slide2 from '../Assets/heroes.webp'
import Contact from './Contact'


const Hero = () => {

  const [visible, setvisible]=useState(false)

  return (
    <section className="section hero has-bg-image" aria-label="home"
        >
        <div className="container">

          <div className="hero-content">

            <h1 className="h1 hero-title">Dream Alliance</h1>

            <p className="hero-text">
               Dream Alliance, your gateway to opportunities! 
            </p>
            <p className='hero__text'> US Eb 1 and Eb 2 visa accessible to you.</p>
        

            <div className="btn-wrapper">

              <a href="https://docs.google.com/forms/d/10jmt_pVGD2vj4KO7lDJvlcIXDt0Vd00q6pjDR2i_ZZ0/edit?usp=sharing_eip_se_dm&ts=66df073e" className="btn btn-primary">Check Eligibility</a>
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
                  <figure className="hero-pic" width="575" height="550">
                    <img src={slide2}width="575" height="550" alt="" className="img-cover" />
                  </figure>
          </div>             


        </div>
      </section>
  )
}

export default Hero