import React from 'react'

import globe from '../Assets/globe.jpg'

const About = () => {
  return (
    <section className="about" aria-labelledby="about-label">
        <div className="new-hero">

          <figure className="about-banner">
            <img className='about-images'src={globe} loading="lazy"  alt="about banner"
               />
          </figure>

          <div className="about-content">

            <p className="section-subtitle" id="about-label">Why Choose Us?</p>

            <h2 className="h2 section-title">
                We understand because we walked the path ourselves
            </h2>

            <ul>

              <li className="about-item">
                  <h3 className="card-title">
                      Partnering for Progress: Your EB1/EB2 Journey
                  </h3>

                  <p className="about-contents">
                    It doesn't matter where you come from, where you were born, 
                    your parent's country or what passport you hold. 
                    Our dream is to see your dream align.
                  </p>               
              </li>

            

            </ul>
            <a href="https://docs.google.com/forms/d/10jmt_pVGD2vj4KO7lDJvlcIXDt0Vd00q6pjDR2i_ZZ0/edit?usp=sharing_eip_se_dm&ts=66df073e" className="btn btn-primary">Check Eligibility</a>

          </div>

        </div>
      </section>
  )
}

export default About