import React from 'react'
import '../../src/index.css'

import about1 from '../Assets/about-banner.png'

const About = () => {
  return (
    <section class="about" id="about">
    <div class="container">

      <div class="about-top">

        <h2 class="h2 section-title">What we do</h2>

        <p class="section-text">
          Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the
          development of
          the asset through its charitable foundation.
        </p>

        <ul class="about-list">

          <li>
            <div class="about-card">

              <div class="card-icon">
                <ion-icon name="briefcase-outline"></ion-icon>
              </div>

              <h3 class="h3 card-title">Paid Search and Social Management</h3>

              <p class="card-text">
                Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back
              </p>

            </div>
          </li>

          <li>
            <div class="about-card">

              <div class="card-icon">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </div>

              <h3 class="h3 card-title">Direct Response Content</h3>

              <p class="card-text">
                Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back
              </p>

            </div>
          </li>

          <li>
            <div class="about-card">

              <div class="card-icon">
                <ion-icon name="rocket-outline"></ion-icon>
              </div>

              <h3 class="h3 card-title">CRO and Retention Optimizations</h3>

              <p class="card-text">
                Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back
              </p>

            </div>
          </li>

        </ul>

      </div>

      <div class="about-bottom">

        <figure class="about-bottom-banner">
          <img src={about1} alt="about banner" class="about-banner" />
        </figure>

        <div class="about-bottom-content">

          <h2 class="h2 section-title">We’re obsessed with growth</h2>

          <p class="section-text">
            Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the
            development of
            the asset through its charitable foundation.
          </p>

          <a href="https://docs.google.com/forms/d/10jmt_pVGD2vj4KO7lDJvlcIXDt0Vd00q6pjDR2i_ZZ0/edit?usp=sharing_eil_se_dm&ts=66df073e" class="btn btn-secondary">Get in Touch</a>

        </div>

      </div>

    </div>
  </section>

  )
}

export default About