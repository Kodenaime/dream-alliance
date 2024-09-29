import React from 'react'


import slide2 from '../Assets/hero-slide-2.jpg'


const Hero = () => {
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

              <a href="/info" class="btn btn-primary">Check Eligibility</a>

              <a href="/home#contact" class="btn btn-outline">Consult Now</a>

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