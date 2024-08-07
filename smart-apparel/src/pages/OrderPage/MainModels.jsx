import React from "react";
import "./MainModels.css";
import { useNavigate } from "react-router-dom";
import ButtonDressImage from "../../Images/Models/ButtonDress.jpg";
import ZipperDressImage from "../../Images/Models/ZipperDress.jpg";
import ShortSkirtImage from "../../Images/Models/ShortSkirt.jpeg";
import TideSkirtImage from "../../Images/Models/TideSkirt.png";
import CustomModel from "./CustomModel";

// MainModels component definition
export default function MainModels() {
  const navigate = useNavigate(); 

  // Function to handle navigation to Add New Model page
  const handleAddNewModelBtn = () => {
    navigate("/addNewModel");
  };

  // Function to handle registering an order for a model
  const handleRegisterOrder = (modelName) => {
    navigate("/orderregister", { state: { modelName } });
  };

  return (
    <div>
      {/* Section for displaying models */}
      <div class="frame1">
        <CustomModel
          mainText="Button Dress"
          Image={ButtonDressImage}
          onRegisterOrder={handleRegisterOrder}
        />

        <CustomModel
          mainText="Zipper Dress"
          Image={ZipperDressImage}
          onRegisterOrder={handleRegisterOrder}
        />
      </div>
      {/* Section for displaying models */}
      <div class="frame1">
        <CustomModel
          mainText="Short Skirt"
          Image={ShortSkirtImage}
          onRegisterOrder={handleRegisterOrder}
        />

        <CustomModel
          mainText="Tide Skirt"
          Image={TideSkirtImage}
          onRegisterOrder={handleRegisterOrder}
        />
      </div>

      {/* Section for Add New Model button */}
      <div class="frame1">
        {/* Add New Model button */}
        <button
          style={{
            backgroundColor: "#1658E8",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            color: "white",
            fontWeight: "bold",
            width: "10rem",
            height: "3rem",
            fontSize: "18px",
            display: "flex",
            flexdirection: "row",
            textalign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          onClick={handleAddNewModelBtn} // onClick event handler for Add New Model button
        >
          Add New Model
        </button>
      </div>
    </div>
  );
}
