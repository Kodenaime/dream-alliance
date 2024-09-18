import React from 'react'

import { FaShippingFast } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { SlEnvolopeLetter } from "react-icons/sl";

const Services = () => {
  return (
    <section class="section service" aria-labelledby="service-label">
        <div class="container">

          <p class="section-subtitle" id="service-label">What We Do?</p>

          <h2 class="h2 section-title">
            The service we offer is specifically designed to meet your needs.
          </h2>

          <ul class="grid-list ">

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="call-outline" aria-hidden="true"><BiSupport /></ion-icon>
                </div>

                <h3 class="h4 card-title">24/7 Support</h3>

                <p class="card-text">
                  Dedicated assistance and problem-solving available around the clock.
                </p>

                {/* <a href="#" class="btn-text">
                  <span class="span">Learn More</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a> */}

              </div>
            </li>

           

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="shield-checkmark-outline" aria-hidden="true"><FaPeopleGroup /></ion-icon>
                </div>

                <h3 class="h4 card-title">Visa Consultation</h3>

                <p class="card-text">
                  Expert guidance on visa requirements, eligibility, and application processes.
                </p>

               

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="cloud-download-outline" aria-hidden="true"><FaShippingFast /></ion-icon>
                </div>

                <h3 class="h4 card-title">Fast-track Visa Application</h3>

                <p class="card-text">
                   Streamlined and expedited visa applications for efficient processing.
                </p>

                

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="pie-chart-outline" aria-hidden="true"><SlEnvolopeLetter /></ion-icon>
                </div>

                <h3 class="h4 card-title">Expert Letter</h3>

                <p class="card-text">
                  Tailored letters of support or recommendation for visa applications.
                </p>

                

              </div>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default Services