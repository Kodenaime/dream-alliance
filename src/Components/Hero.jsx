import React from 'react'


import slide2 from '../Assets/hero-slide-2.jpg'


const Hero = () => {
  return (
    <section class="section hero has-bg-image" aria-label="home"
        >
        <div class="container">

          <div class="hero-content">

            <h1 class="h1 hero-title">Crafting project specific solutions with expertise.</h1>

            <p class="hero-text">
              We’re a creative company that focuses on establishing long-term relationships with customers.
            </p>

            <div class="btn-wrapper">

              <a href="/info" class="btn btn-primary">Check Eligibility</a>

              <a href="#contact" class="btn btn-outline">Let's Talk</a>

            </div>

          </div>

          <div class="hero-slider" data-slider>

            <div class="slider-inner">
              <ul class="slider-container" data-slider-container>

                <li class="slider-item">

                  <figure class="img-holder" width="575" height="550">
                    <img src={slide2}width="575" height="550" alt="" class="img-cover" />
                  </figure>

                </li>

                

              

              </ul>
            </div>

            <button class="slider-btn prev" aria-label="slide to previous" data-slider-prev>
              <ion-icon name="arrow-back"></ion-icon>
            </button>

            <button class="slider-btn next" aria-label="slide to next" data-slider-next>
              <ion-icon name="arrow-forward"></ion-icon>
            </button>

          </div>

        </div>
      </section>
  )
}

export default Hero