import React from "react";
import "./FirstPage.css";
import Card1 from "../../components/Card1/Card1";
import backImage from "../../Assets/cloth.png";

export default function FirstPage() {
  return (
    <div className="firstPageContainer">
      <div className="cardContainerBox">
        <Card1 />
      </div>
      <div className="Inventory_Page">
            <div className="Bottons">
                <button className="btn" onClick="url">
                <p className="Task">Add Material Details</p>
                </button>

                <button className="btn" onClick="url">
                <p className="Task">View Material Type</p>
                </button>

                <button className="btn" onClick="url">
                <p className="Task">Update Material Details</p>
                </button>
            </div>
            <div className="Graph">
                <img src={backImage} alt="image" className="Image" />
            </div>
        </div>
    </div>
  );
}
