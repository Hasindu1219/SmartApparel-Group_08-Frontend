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
                {/* Link to Order Registration */}
                <Link to={`/orders/orderregister`}>
                    <button className="btn1">
                        <p className="Task1">Register Order</p>
                    </button>
                </Link>
                {/* Link to Order Details */}
                <Link to={`/orderdetails`}>
                    <button className="btn1">
                        <p className="Task1">Order Details</p>
                    </button>
                </Link>
                {/* Link to Order Status */}
                <Link to={'/orderstatus'}>
                    <button className="btn1">
                        <p className="Task1">Order Status</p>
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
