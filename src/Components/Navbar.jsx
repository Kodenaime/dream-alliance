import React from 'react'
import '../index.css'
import logo from'../Assets/logo.png'

import { useState, useRef } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {

  const navRef = useRef();

    const showNavbar = () => {
         navRef.current.classList.toggle('responsive_nav');
     }

  const [activeNav, setActiveNav] = useState('#');      

  const [isNavShow, setIsNavShow] = useState(false);

  return (
    
    <header>
			<a href='/' className="logo">
          <img src={logo}  alt="Logo for the website" /> 
      </a>
			<nav ref={navRef}>
				<a href="#">Features</a>
				<a href="#about">How it Works</a>
				<a href="#featured">Supported Chains</a>
                
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaRegWindowClose />
				</button>
			</nav>
      <div className="btn na-b">Check Eligibility</div>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBarsStaggered />
			</button>
	</header>
  )
}

export default Navbar