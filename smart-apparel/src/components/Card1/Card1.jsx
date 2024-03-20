import React from "react";
import "./Card1.css";
import tshirtIcon from "../../Assets/tshirt.png";

export default function Card1({}) {
  return (
    <div className="cardMainContainer">
      <div className="Card_Container">
        <div className="iconBox">
          <img src={tshirtIcon} alt="Icon" className="IMG_icon" />
          <h3 className="Material_Description">
            Available Cloths Material Types{" "}
          </h3>
        </div>
        <p className="Count">Cloth Material:20</p>
      </div>

      <div className="Card_Container">
        <div className="iconBox">
          <img src={tshirtIcon} alt="Icon" className="IMG_icon" />
          <h3 className="Material_Description">
            Available Button <br></br>& Zip Types
          </h3>
        </div>
        <div className="cardSubTopic">
          <p className="Count">Button: 50</p>
          <p className="Count">Zip:25</p>
        </div>
      </div>

      <div className="Card_Container">
        <div className="iconBox">
          <img src={tshirtIcon} alt="Icon" className="IMG_icon" />
          <h3 className="Material_Description">
            Other Stock<br></br> Categories
          </h3>
        </div>
        <p className="Count">Material Categories:60</p>
      </div>
    </div>
  );
}
