import React from 'react'
import slide3 from '../Assets/hero-slide-3.jpg'
const Viss = () => {
  return (
    <section class="new-hero">
            <div class="left">
                <h3 class="head_text">EB2 Visa</h3>
                <p class="body_text">
                EB1 visa is a priority worker visa category for individuals with extraordinary ability,
                 outstanding professors, and researchers.
                 Let us guide you through the EB1 visa process to help you achieve your American dream.
                </p>
                <a href="#contact" class="btn">Get In Touch</a>
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