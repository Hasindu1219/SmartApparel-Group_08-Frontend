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
                {/* Link to Check Inventory
                <Link to={'/inventorycheck'}>
                    <button className="btn1">
                        <p className="Task1">Check Inventory</p>
                    </button>
                </Link> */}
            </div>
            {/* Image Frame */}
            <div className="Frame">
                <img src={OrderHomeImage} alt="OrderHome" className="Image" />
            </div> 
        </div>
    </div>
  )
}
