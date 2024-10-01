import React from 'react'


import client1 from '../Assets/client-2.jpg'
import client2 from '../Assets/client-3.jpg'
import client3 from '../Assets/client-4.jpg'

const Features = () => {
  return (
    <section class="section feature" aria-labelledby="feature-label">
    <div class="feat-container">

      <div className="feat-head">
        <h2>We Have Something for Everyone</h2>
      </div>

      <div className="feats">

        <div className="feat downer">
          <img src={client1} alt="" />
          <h4>Individual's</h4>
        </div>
        <div className="feat">
          <img src={client2} alt="" />
          <h4>Professional's</h4>
        </div>
        <div className="feat downer">
          <img src={client3} alt="" />
          <h4>Families</h4>
        </div>

      </div>

    </div>
  </section>

  )
}

export default Features