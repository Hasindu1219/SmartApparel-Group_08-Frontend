import React from 'react'
import './CustomerHome.css'
import CustomerHomeImage from '../../Images/CustomerHome.jpg'
import { useNavigate } from 'react-router-dom'

export default function CustomerHome() {
    const navigateTo = useNavigate();
  return (
    <div>
        <div className="CustomerHomePage">
            <div className="Botton">
                <button className="btn1" onClick={() => navigateTo("/customerregister")}>
                    <p className="Task1">Register Customer</p>
                </button>
                <button className="btn1" onClick={() => navigateTo("/customerdetails")}>
                    <p className="Task1">Customer Details</p>
                </button>
                <button className="btn1" onClick={() => navigateTo("/customerstatus")}>
                    <p className="Task1">Customer Status</p>
                </button>
            </div>
            <div className="Frame">
                <img src={CustomerHomeImage} alt="CustomerHome" className="Image" />
            </div> 
        </div>
    </div>
  )
}
