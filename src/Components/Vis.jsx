import React from 'react'
import '../index.css'

import slide2 from '../Assets/hero-slide-2.jpg'

const Visa = () => {
  return (
    <section class="new-hero">
            <div class="right">
                <div class="img_container">
                    <img src={slide2} alt="" class="img" />
                </div>
            </div>
            <div class="left">
                <h3 class="head_text">EB1 Visa</h3>
                <p class="body_text">
                EB1 visa is a priority worker visa category for individuals with extraordinary ability,
                 outstanding professors, and researchers.
                 Let us guide you through the EB1 visa process to help you achieve your American dream.
                </p>
                <a href="#" class="btn">Get In Touch</a>
            </div>
           
    </section>
   
    
  )
}

export default Visa