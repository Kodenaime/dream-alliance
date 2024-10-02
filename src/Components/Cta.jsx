import React from 'react'

import logons from '../Assets/logons.png'

const Cta = () => {
  return (
    <section class="cta" aria-label="call to action">
    <div class="container">

      <div  className='logons' ><img src={logons} alt="" width='85%'/></div>

      <h2 class="cta-title">
        We Provide Tailored Solutions for Each Client Ensuring Success.
      </h2>     

    </div>
  </section>
  )
}

export default Cta