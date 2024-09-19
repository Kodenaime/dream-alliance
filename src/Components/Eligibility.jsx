import React from 'react'
import '../index.css'

import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Eligibility = () => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wlzinr9', 'template_yfkhqfk', form.current, 'sOqfTenK8i1mOXGWG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()

  };

  return (
    <section  class="eligibility-form" >
            
            <form ref={form} onSubmit={sendEmail} action="">

                <div class="input-wrapper">
                <label for="name" class="input-label">Name *</label>

                <input type="text" name="name" id="name" required placeholder="Type Name" class="input-field" />
                </div>

                <div class="input-wrapper">
                <label for="email" class="input-label">Email Address *</label>

                <input type="email" name="email" id="email" required placeholder="Type Email Address" class="input-field" />
                </div>

                <div class="input-wrapper">
                <label for="email" class="input-label">Country Of Residence *</label>

                <input type="text" name="name" id="name" required placeholder="Type your country" class="input-field" />
                </div>

                <div class="input-wrapper">
                <label for="phone" class="input-label">Phone</label>

                <input type="tel" name="phone" id="phone" placeholder="Type Phone Number" class="input-field" />
                </div>

              
                <div className="wraps">
                    <p>Years of Experience</p>
                    <div className="checker">
                        <input type="checkbox" id='check1'/>
                        <label for="check1">below 5</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" id='check2'/>
                        <label for="check2">5-10</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" id='check3'/>
                        <label for="check3">10+</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" id='check4'/>
                        <label for="check4">15+</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" id='check5'/>
                        <label for="check5">20 and above</label>
                    </div>
                </div>

                <div className="wraps">
                    <p>Do you have any educational qualification?</p>
                    <div className="checker">
                        
                        <input type="checkbox" />
                        <label for="check1">Yes</label>
                    </div>
                    <div className="checker">
                        
                        <input type="checkbox" />
                        <label for="check1">No</label>
                    </div>
                </div>

                <div className="wraps">
                    <p>Do you have any Certifications?</p>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check1">Yes</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check1">No</label>
                    </div>
                </div>

                <div className="wraps">
                    <p>If yes</p>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check1">National</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check2">International</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check3">Both</label>
                    </div>
                </div>

                <div className="wraps">
                    <p>Have you received any recognised awards</p>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check1">Yes</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check1">No</label>
                    </div>
                </div>

                <div className="wraps">
                    <p>If yes what kind?</p>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check1">National</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check2">International</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check3">Both</label>
                    </div>
                </div>

                <div className="wraps">
                    <p>Do you have any articles or publications?</p>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check1">Yes</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check2">No</label>
                    </div>
                </div>

                <div className="wraps">
                    <p>IF yes what Type?</p>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check1">Industry</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check2">Major Media</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check3">Both</label>
                    </div>
                </div>

                <div className="wraps">
                    <p>Industry Salary Range per Annum in USD</p>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check1">Below $40,000</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check2">$40,000 - $100,000</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check3">Above $100,000</label>
                    </div>
                </div>

                <div className="wraps">
                    <p>Have you delivered any Exhibitions /Workshops</p>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check1">Yes</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check2">No</label>
                    </div>
                </div>

                <div className="wraps">
                    <p>If yes what Category</p>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check1">National</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check2">International</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check3">Both</label>
                    </div>
                </div>

                <div className="wraps">
                    <p>Have you been a speaker on any Panel sessions?</p>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check1">Yes</label>
                    </div>
                    <div className="checker">
                        <input type="checkbox" />
                        <label for="check2">No</label>
                    </div>
                </div>

                <div class="input-wrapper">
                    <label for="email" class="input-label">If Yes Tell us more *</label>

                    <input type="text" name="text" id="text" required placeholder="Type your message" class="input-field" />
                </div>

                <button type="submit" class="btn btns-primary">Submit</button>

    </form>
        
    </section>
  )
}

export default Eligibility