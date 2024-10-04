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

                <h3 class="h4 card-title">Dedicated support</h3>

                <p class="card-text">
                  Dedicated assistance and problem-solving available around the clock.
                </p>

         
              </div>
            </li>

           

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="shield-checkmark-outline" aria-hidden="true"><FaPeopleGroup /></ion-icon>
                </div>

                <h3 class="h4 card-title"> EB1 & EB2 visa consultation</h3>

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

                <h3 class="h4 card-title"> Fast-track visa application
                </h3>

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

                <h3 class="h4 card-title">Visa appeal</h3>

                <p class="card-text">
                  Tailored letters of support or request for evidence (RFP) for visa applications.
                </p>

                

              </div>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default Services