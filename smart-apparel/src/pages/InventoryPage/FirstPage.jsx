import React from "react";
import "./FirstPage.css";
import Card1 from "../../components/Card1/Card1";
import backImage from "../../Assets/cloth.png";
import { Link } from "react-router-dom";

export default function FirstPage() {
  return (
    <div className="firstPageContainer">
      <div className="cardContainerBox">
        <Card1 />
      </div>
      <div className="Inventory_Page">
            <div className="Bottons">
                <Link to={`/inventory/addInventory`}><button className="btn">
                <p className="Task">Add Material Details</p>
                </button></Link>

                <Link to={`/inventory/viewInventory`}>
                  <button className="btn" onClick="url">
                  <p className="Task">View Material Details</p>
                  </button>
                </Link>
                
            </div>
            <div className="Graph">
                <img src={backImage} alt="image" className="Image" />
            </div>
        </div>
    </div>
  );
}
