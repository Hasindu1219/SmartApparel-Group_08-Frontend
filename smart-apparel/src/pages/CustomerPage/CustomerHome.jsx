import React from 'react'
import './CustomerHome.css'
import CustomerHomeImage from '../../Images/CustomerHome.jpg'
import { Link } from "react-router-dom";

export default function CustomerHome() {
  return (
    <div>
        {/* Customer Home Page */}
        <div className="CustomeHomePage">
            <div className="Botton">
                {/* Link to Customer Registration */}
                <Link to={`/customers/customerregister`}>
                    <button className="btn1">
                        <p className="Task1">Register Customer</p>
                    </button>
                </Link>
                {/* Link to Customer Details */}
                <Link to={`/customerdetails`}>
                    <button className="btn1">
                        <p className="Task1">Customer Details</p>
                    </button>
                </Link>
                {/* Link to Customer Status */}
                <Link to={'/customerstatus'}>
                    <button className="btn1">
                        <p className="Task1">Customer Status</p>
                    </button>
                </Link>
            </div>
            {/* Image Frame */}
            <div className="Frame">
                <img src={CustomerHomeImage} alt="CustomerHome" className="Image" />
            </div> 
        </div>
    </div>
  )
}
