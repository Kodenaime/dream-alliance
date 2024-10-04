import React from 'react'


import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

import logo from '../Assets/logo.png'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="container grid-list">

      <div className="footer-brand">

        <a href="/" className="logo">
          <img src={logo} width="74" height="24" alt="dream alliance logo" />
        </a>

        <p className="footer-text">
          &copy; 2024 dream alliance. <br /> All rights reserved.
        </p>

      

      </div>

      <ul className="footer-list">

        <li>
          <p className="h4 footer-list-title">Contact Us</p>
        </li>

        <li>
          <address className="footer-text">
          24 School Street, Floor 2, Downtown Boston, MA 02108

          </address>
        </li>

        <li>
          <a href="mailto:info@yourdreamalliance.com" className="footer-link">info@yourdreamalliance.com</a>
        </li>

        <li>
          <a href="tel: +16172026372" className="footer-link">US: +1 (617) 202-6372</a>
          <a href="tel: +2348122545669" className="footer-link">NG: +234 812 254 5669</a>
        </li>

      </ul>

      <ul className="footer-list">

        <li>
          <p className="h4 footer-list-title">Socials</p>
        </li>

        <ul className="social-list">
{/* 
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"><FaFacebookSquare /></ion-icon>
            </a>
          </li> */}

          <li>
            <a href="https://x.com/alliance25564" className="social-link">
              <ion-icon name="logo-twitter"><FaTwitter /></ion-icon>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/yourdreamalliance?igsh=NDdibzRnNHZ4ejBq" className="social-link">
              <ion-icon name="logo-instagram"><FaInstagram /></ion-icon>
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com/@yourdreamalliance" className="social-link">
              <ion-icon name="logo-youtube"><FaYoutube /></ion-icon>
            </a>
          </li>

        </ul>

      </ul>

      <div className="footer-list">

        <p className="footer-text">
          Subscribe to our newsletter .
        </p>

        <form action="" className="input-wrapper">
          <input type="email" name="email_address" placeholder="Email Address" required className="input-field" />

          <button type="submit" className="submit-btn">Join</button>
        </form>

      </div>

    </div>
  </footer>
  )
}

export default Footer