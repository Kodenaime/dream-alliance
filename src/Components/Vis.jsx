import React from 'react'
import '../index.css'

import front from '../Assets/front.jpg'


const Visa = () => {
  return (
    <section class="new-hero">
            <div class="right">
                <div class="images_container">
                    <img src={front} alt="" class="img" />
                </div>
            </div>
            <div class="left">
                <h2 class="head_text">EB1 Visa</h2>
                <h3 className='head-text'>Unlock your potential with our expert EB1 visa services. </h3>
                <p class="body_text">                                    
                   
                    EB1 visa is a U.S. priority worker visa category for individuals with extraordinary ability, outstanding professors, 
                    and researchers. 
                    Let us guide you through the EB1 visa process to help you achieve your American dream.
                </p>
                <a href="https://docs.google.com/forms/d/10jmt_pVGD2vj4KO7lDJvlcIXDt0Vd00q6pjDR2i_ZZ0/edit?usp=sharing_eip_se_dm&ts=66df073e" className="btn">Check Eligibility</a>
            </div>
           
    </section>
   
    
  )
}

export default Visa