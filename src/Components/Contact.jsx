import React from 'react'
import '../../src/index.css'

import cont from '../Assets/contact.png'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {

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
    <section class="contact" id="contact">
    <div class="container">

      

      <form ref={form} onSubmit={sendEmail}  action="" class="contact-form">

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

          <input type="tel" name="subject" id="phone" placeholder="Type your subject" class="input-field" />
        </div>

        <div class="input-wrapper">
          <label for="text" class="input-label">Message *</label>

          <input type="text" name="message" id="text" required placeholder="Type your message" class="input-field" />
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