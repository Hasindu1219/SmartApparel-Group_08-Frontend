import React from 'react';
import './OrderHome.css';
import OrderHomeImage from '../../Images/OrderHome.jpg';
import { Link } from "react-router-dom";

export default function OrderHome() {
  return (
    <div>
        {/* Order Home Page */}
        <div className="CustomeHomePage">
            <div className="Botton">
                {/* Link to Order Models */}
                <Link to={`/ordermodels`}>
                    <button className="btn1">
                        <p className="Task1">Order Models</p>
                    </button>
                </Link>
                {/* Link to Order Details */}
                <Link to={`/orderdetails`}>
                    <button className="btn1">
                        <p className="Task1">Order Details</p>
                    </button>
                </Link>
                {/* Link to Order Shipment */}
                <Link to={'/ordershipment'}>
                    <button className="btn1">
                        <p className="Task1">Order Shipment</p>
                    </button>
                </Link>

                {/* Link to Order Covered Amount page */}
                <Link to={`/linesupervisorordercoveredamount`}>
                  <button className="btn1">
                    <p className="Task1">Order Covered Amount</p>
                  </button>

                </Link>
            </div>
            {/* Image Frame */}
            <div className="Frame">
                <img src={OrderHomeImage} alt="OrderHome" className="Image" />
            </div> 
        </div>
    </div>
  )
}
