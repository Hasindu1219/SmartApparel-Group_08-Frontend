import React from 'react'
import './MainModels.css';
import { useNavigate } from "react-router-dom";
import ButtonDressImage from '../../Images/Models/ButtonDress.jpg'
import ZipperDressImage from '../../Images/Models/ZipperDress.jpg'
import ShortSkirtImage from '../../Images/Models/ShortSkirt.jpeg'
import TideSkirtImage from '../../Images/Models/TideSkirt.png'
import CustomModel from './CustomModel';

export default function MainModels() {
  const navigate = useNavigate();

  const handleAddNewModelBtn = () => {
    navigate("/addNewModel");
  };

  return (
    <div>
        <div class = "frame1">
            <CustomModel mainText='Button Dress' Image={ButtonDressImage}/>
            <CustomModel mainText='Zipper Dress' Image={ZipperDressImage}/>
        </div>
        <div class = "frame1">
            <CustomModel mainText='Short Skirt' Image={ShortSkirtImage}/>
            <CustomModel mainText='Tide Skirt' Image={TideSkirtImage}/>
        </div> 
        <div class = "frame1">
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
        onClick={handleAddNewModelBtn}
      >
        Add New Model
      </button>
        </div>        
    </div>
  )
}
