import React, { useState } from 'react'
import './WNavbar.css'
import logo from '../../../Assets/WebAssets/WAssets/logo.png'
import { Link } from 'react-router-dom';

export default function WNavbar() {

    const [menu,setMenu] = useState("Home")

  return (
    <div className = 'navbar'>
      <div className = 'nav-logo'>
        <img src={logo} alt=""/>
        <p>SMART APPAREL </p>
      </div>
      <nav>
      <ul className='nav-menu'>
      
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Frocks">Frocks</Link></li>
        <li><Link to="/Skirts">Skirts</Link></li>
        <li><Link to="/Blouses">Blouses</Link></li>
        <li><Link to="/T-Shirts">T-Shirts</Link></li>

      </ul>
    </nav>  
      
    </div>
  )
}
