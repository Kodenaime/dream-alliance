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
    <section className="contact" id="contact">
    <div className="container">

      

      <form ref={form} onSubmit={sendEmail}  action="" className="contact-form">

        <div className="input-wrapper">
          <label for="name" className="input-label">Full Name *</label>

          <input type="text" name="name" id="name" required placeholder="Type Name" className="input-field" />
        </div>

        <div className="input-wrapper">
          <label for="email" className="input-label">Email Address *</label>

          <input type="email" name="email" id="email" required placeholder="Type Email Address" className="input-field" />
        </div>

        <div className="input-wrapper">
          <label for="phone" className="input-label">Subject</label>

          <input type="tel" name="subject" id="phone" placeholder="Type your subject" className="input-field" />
        </div>

        <div className="input-wrapper">
          <label for="text" className="input-label">Message *</label>

          <input type="text" name="message" id="text" required placeholder="Type your message" className="input-field" />
        </div>

      

        <button type="submit" className="btn btn-primary">Send Message</button>

      </form>

      <div className="contact-content">
        <h2 className="h2 contact-title">Let’s get that Visa, together</h2>

        <figure className="contact-banner">
          <img src={cont} alt="contact banner" />
        </figure>
      </div>

    </div>
  </section>
  )
}

export default Contact