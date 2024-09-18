import React from 'react'
import '../../src/index.css'

import cont from '../Assets/contact.png'

export const Contact = () => {
  return (
    <section class="contact" id="contact">
    <div class="container">

      

      <form action="" class="contact-form">

        <div class="input-wrapper">
          <label for="name" class="input-label">Full Name *</label>

          <input type="text" name="name" id="name" required placeholder="Type Name" class="input-field" />
        </div>

        <div class="input-wrapper">
          <label for="email" class="input-label">Email Address *</label>

          <input type="email" name="email" id="email" required placeholder="Type Email Address" class="input-field" />
        </div>

        <div class="input-wrapper">
          <label for="phone" class="input-label">Subject</label>

          <input type="tel" name="phone" id="phone" placeholder="Type Phone Number" class="input-field" />
        </div>

        <div class="input-wrapper">
          <label for="email" class="input-label">Message *</label>

          <input type="text" name="text" id="text" required placeholder="Type your message" class="input-field" />
        </div>

        <button type="submit" class="btn btn-primary">Send Message</button>

      </form>

      <div class="contact-content">
        <h2 class="h2 contact-title">Let’s get that Visa, together</h2>

        <figure class="contact-banner">
          <img src={cont} alt="contact banner" />
        </figure>
      </div>

    </div>
  </section>
  )
}

export default Contact