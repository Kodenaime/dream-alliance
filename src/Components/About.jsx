import React from 'react'

import globe from '../Assets/globe.jpg'

const About = () => {
  return (
    <section class="about" aria-labelledby="about-label">
        <div class="new-hero">

          <figure class="about-banner">
            <img className='about-images'src={globe} loading="lazy"  alt="about banner"
               />
          </figure>

          <div class="about-content">

            <p class="section-subtitle" id="about-label">Why Choose Us?</p>

            <h2 class="h2 section-title">
              We bring solutions to make life easier for our clients.
            </h2>

            <ul>

              <li class="about-item">
                <div class="accordion-card expanded" data-accordion>

                  <h3 class="card-title">
                    <button class="accordion-btn" data-accordion-btn>
                      <ion-icon name="chevron-down-outline" aria-hidden="true" class="down"></ion-icon>

                      <spna class="span h5">Everyone Has the Right To Dream</spna>
                    </button>
                  </h3>

                  <p class="accordion-content">
                  It doesn't matter where you come from, where you were born, 
                  your parent's country or what passport you hold. 
                  Our dream is to see your dream align.
                  </p>

                </div>
              </li>

            

            </ul>
            <a href="https://docs.google.com/forms/d/10jmt_pVGD2vj4KO7lDJvlcIXDt0Vd00q6pjDR2i_ZZ0/edit?usp=sharing_eip_se_dm&ts=66df073e" className="btn">Check Eligibility</a>

          </div>

        </div>
      </section>
  )
}

export default About