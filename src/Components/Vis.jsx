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
                    We guide you through the process, ensuring a seamless and successful application.
                    EB1 visa is a priority worker visa category for individuals with extraordinary ability, outstanding professors, 
                    and researchers. 
                    Let us guide you through the EB1 visa process to help you achieve your American dream.
                </p>
                <a href="/info" class="btn">Get In Touch</a>
            </div>
           
    </section>
   
    
  )
}

export default Visa