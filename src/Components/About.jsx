import React from 'react'

import about1 from '../Assets/about-banner.png'

const About = () => {
  return (
    <section class="about" aria-labelledby="about-label">
        <div class="container">

          <figure class="about-banner">
            <img src={about1} width="800" height="580" loading="lazy" alt="about banner"
              class="w-100" />
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

                      <spna class="span h5">Professional Design</spna>
                    </button>
                  </h3>

                  <p class="accordion-content">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                    sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna,
                    vel.
                  </p>

                </div>
              </li>

              <li class="about-item">
                <div class="accordion-card" data-accordion>

                  <h3 class="card-title">
                    <button class="accordion-btn" data-accordion-btn>
                      <ion-icon name="chevron-down-outline" aria-hidden="true" class="down"></ion-icon>

                      <spna class="span h5">Top-Notch Support</spna>
                    </button>
                  </h3>

                  <p class="accordion-content">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                    sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna,
                    vel.
                  </p>

                </div>
              </li>

              <li class="about-item">
                <div class="accordion-card" data-accordion>

                  <h3 class="card-title">
                    <button class="accordion-btn" data-accordion-btn>
                      <ion-icon name="chevron-down-outline" aria-hidden="true" class="down"></ion-icon>

                      <spna class="span h5">Exclusive Assets</spna>
                    </button>
                  </h3>

                  <p class="accordion-content">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                    sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna,
                    vel.
                  </p>

                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>
  )
}

export default About