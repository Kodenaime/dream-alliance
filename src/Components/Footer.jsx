import React from 'react'


import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import logo from '../Assets/logo.png'
const Footer = () => {
  return (
    <footer class="footer">
    <div class="container grid-list">

      <div class="footer-brand">

        <a href="/" class="logo">
          <img src={logo} width="74" height="24" alt="dream alliance logo" />
        </a>

        <p class="footer-text">
          &copy; 2024 dream alliance. <br /> All rights reserved.
        </p>

      

      </div>

      <ul class="footer-list">

        <li>
          <p class="h4 footer-list-title">Get in Touch</p>
        </li>

        <li>
          <address class="footer-text">
          24 School Street, Floor 2, Downtown Boston, MA 02108

          </address>
        </li>

        <li>
          <a href="mailto:info@yourdreamalliance.com" class="footer-link">info@yourdreamalliance.com</a>
        </li>

        <li>
          <a href="tel: 343434343434" class="footer-link">+1 (161) 720 26372</a>
        </li>

      </ul>

      <ul class="footer-list">

        <li>
          <p class="h4 footer-list-title">Socials</p>
        </li>

        <ul class="social-list">

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-linkedin"><FaLinkedin /></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-twitter"><FaTwitter /></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-instagram"><FaInstagram /></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-youtube"><FaYoutube /></ion-icon>
            </a>
          </li>

        </ul>

      </ul>

      <div class="footer-list">

        {/* <p class="h4 footer-list-title">Our Newsletter</p> */}

        <p class="footer-text">
          Subscribe to our newsletter .
        </p>

        <form action="" class="input-wrapper">
          <input type="email" name="email_address" placeholder="Email Address" required class="input-field" />

          <button type="submit" class="submit-btn">Join</button>
        </form>

      </div>

    </div>
  </footer>
  )
}

export default Footer