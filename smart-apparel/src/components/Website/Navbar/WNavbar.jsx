import React, { useState } from 'react'
import './WNavbar.css'
import logo from '../../../Assets/WebAssets/WAssets/logo.png'

export default function WNavbar() {

    const [menu,setMenu] = useState("Frocks")

  return (
    <div className = 'navbar'>
      <div className = 'nav-logo'>
        <img src={logo} alt=""/>
        <p>SMART APPAREL </p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("Home")}}>Home{menu==="Home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Frock")}}>Frocks{menu==="Frock"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Blouse")}}>Blouses{menu==="Blouse"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("T-Shirt")}}>T-Shirts{menu==="T-Shirt"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Skirt")}}>Skirts{menu==="Skirt"?<hr/>:<></>}</li>
      </ul>
      
      
    </div>
  )
}
