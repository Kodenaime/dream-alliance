import React from 'react'
import '../index.css'

import slide2 from '../Assets/hero-slide-2.jpg'
import slide3 from '../Assets/hero-slide-3.jpg'
const Visa = () => {
  return (
    <section class="section feature" aria-labelledby="feature-label"> 
        <div class="hero container">   

            
                <div className="topper">
                    <div className="left">
                        <h2>EB 1 Visa</h2>
                        <p>EB1 visa is a priority worker visa category for individuals with extraordinary ability,
                            outstanding professors, and researchers.
                            Let us guide you through the EB1 visa process to help you achieve your American dream.</p>
                        <a href="#" className="btn">Learn More</a>
                    </div>
                    <div className="right">
                        <img src={slide2} alt="" />
                    </div>
                </div>
            
        </div>
        <div class="hero container">   

            
                <div className="topper">
                    <div className="left">
                        <h2>EB 1 Visa</h2>
                        <p>EB1 visa is a priority worker visa category for individuals with extraordinary ability,
                            outstanding professors, and researchers.
                            Let us guide you through the EB1 visa process to help you achieve your American dream.</p>
                        <a href="#" className="btn">Learn More</a>
                    </div>
                    <div className="right">
                        <img src={slide2} alt="" />
                    </div>
                </div>

        </div>
        
    </section>
   
    
  )
}

export default Visa