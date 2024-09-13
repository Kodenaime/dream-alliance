import React from 'react'

const Services = () => {
  return (
    <section class="section service" aria-labelledby="service-label">
        <div class="container">

          <p class="section-subtitle" id="service-label">What We Do?</p>

          <h2 class="h2 section-title">
            The service we offer is specifically designed to meet your needs.
          </h2>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h4 card-title">24/7 Support</h3>

                <p class="card-text">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras
                  justo.
                </p>

                <a href="#" class="btn-text">
                  <span class="span">Learn More</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="shield-checkmark-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h4 card-title">Secure Payments</h3>

                <p class="card-text">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras
                  justo.
                </p>

                <a href="#" class="btn-text">
                  <span class="span">Learn More</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="cloud-download-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h4 card-title">Daily Updates</h3>

                <p class="card-text">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras
                  justo.
                </p>

                <a href="#" class="btn-text">
                  <span class="span">Learn More</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="pie-chart-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h4 card-title">Market Research</h3>

                <p class="card-text">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras
                  justo.
                </p>

                <a href="#" class="btn-text">
                  <span class="span">Learn More</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default Services