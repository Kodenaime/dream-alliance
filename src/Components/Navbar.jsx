import React from 'react'
import logo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <header>

    <div class="container">

      <a href="#" class="logo">
        <img src={logo} alt=" agency logo" />
      </a>

      <div class="navbar-wrapper">

        <button class="navbar-menu-btn" data-navbar-toggle-btn>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <nav class="navbar" data-navbar>

          <ul class="navbar-list">

            <li class="nav-item">
              <a href="#home" class="nav-link">Home</a>
            </li>

            <li class="nav-item">
              <a href="#about" class="nav-link">What we do</a>
            </li>

            <li class="nav-item">
              <a href="#features" class="nav-link">Why us?</a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">Our work</a>
            </li>

            <li class="nav-item">
              <a href="#contact" class="nav-link">Contact</a>
            </li>

          </ul>

          <a href="https://docs.google.com/forms/d/10jmt_pVGD2vj4KO7lDJvlcIXDt0Vd00q6pjDR2i_ZZ0/edit?usp=sharing_eil_se_dm&ts=66df073e" class="btn btn-primary">Get in touch</a>

        </nav>

      </div>

    </div>

  </header>
  )
}

export default Navbar