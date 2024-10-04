import React from 'react'
import slide3 from '../Assets/hero-slide-3.jpg'
const Viss = () => {
  return (
    <section class="new-hero">
            <div class="left">
                <h2 class="head_text">EB2 Visa</h2>
                <h3 className="head-text">Advance your career with an EB2 visa</h3>
                <p class="body_text">               
                    EB2 Visa is a U.S. immigrant visa category is designed for individuals who are members of professional bodies, 
                    holding advanced degrees or exceptional ability. 
                    This means you must have a master's degree or higher (or equivalent) in a specific field, 
                    or exceptional ability in your field as demonstrated by a national or international recognition.
                </p>
                <a href="https://docs.google.com/forms/d/10jmt_pVGD2vj4KO7lDJvlcIXDt0Vd00q6pjDR2i_ZZ0/edit?usp=sharing_eip_se_dm&ts=66df073e" class="btn">Check Eligibility</a>
            </div>
            <div class="right">
                <div class="img_container">
                    <img src={slide3} alt="" class="img" />
                </div>
            </div>
        </section>
  )
}

export default Viss