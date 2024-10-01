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
		<a href='/home' className="logo">
          <img src={logo}  alt="Logo for the website" /> 
       </a>
			<nav ref={navRef}>
				<a href="/home">Home</a>
				<a href="/visa">Visas</a>				
                <a href="/info">Contact Us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaRegWindowClose />
				</button>
			</nav>
      <a href='https://docs.google.com/forms/d/10jmt_pVGD2vj4KO7lDJvlcIXDt0Vd00q6pjDR2i_ZZ0/edit?usp=sharing_eip_se_dm&ts=66df073e' className="btn na-b">Check Eligibility</a>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBarsStaggered />
			</button>
	</header>
  )
}

export default Navbar