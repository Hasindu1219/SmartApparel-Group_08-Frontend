import React from "react";
import "../InventoryPage/FirstPage.css";
import Card1 from "../../components/Card1/Card1";
import backImage from "../../Assets/cloth.png";
import { Link } from "react-router-dom";

export default function FirstPage() {
  return (
    // Container for the entire first page
<div className="firstPageContainer">
    {/* // Container for the card component */}
    <div className="cardContainerBox">
        <Card1 /> {/* Rendering the Card1 component */}
    </div>
    {/* // Main container for the inventory page content */}
    <div className="Inventory_Page">
        {/* // Container for buttons */}
        <div className="Bottons">
            {/* Link to the Add Inventory page */}
            <Link to={`/PM/Inventory/AddMaterials`}>
                <button className="btn">
                    <p className="Task">Add Material Details</p> {/* Button text */}
                </button>
            </Link>

            {/* Link to the View Inventory page */}
            <Link to={`/PM/Inventory/ViewMaterials`}>
                <button className="btn">
                    <p className="Task">View Material Details</p> {/* Button text */}
                </button>
            </Link>
        </div>
        {/* // Container for the graph/image */}
        <div className="Graph">
            <img src={backImage} alt="image" className="Image" /> {/* Show an image with a background */}
        </div>
    </div>
</div>

  );
}
