import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Error from "../../components/Error1/Error1";
import "./AddNewModel.css";
import { useNavigate } from "react-router-dom";

export default function AddNewModel() {
  // State variables
  const [modelName, setModelName] = useState("");
  const [modelImage, setModelImage] = useState("");
  const [clothMaterial, setClothMaterial] = useState("");
  const [clothAmount, setClothAmount] = useState("");
  const [buttonAmount, setButtonAmount] = useState("");
  const [zipperAmount, setZipperAmount] = useState("");
  const [elasticAmount, setElasticAmount] = useState("");

  const [error, setError] = useState("none");
  const [errorType, setErrorType] = useState("none");
  const errorMsg = ["All fields are required"];

  // Navigate between routes
  const navigate = useNavigate();

  // Function to handle the Add button click
  const handleAddBtn = async () => {
    if (
      !modelName ||
      !modelImage ||
      !buttonAmount ||
      !zipperAmount ||
      !elasticAmount
    ) {
      setError("block");
      setErrorType(errorMsg[0]);
      setTimeout(() => {
        setError("none");
      }, 2000);
    } else {
      const formData = {
        modelName,
        modelImage,
        buttonAmount,
        zipperAmount,
        elasticAmount,
      };
      await axios
        .post(
          "http://localhost:8080/smart-apperal/api/order/addNewModel",
          formData
        )
        .then((res) => {
          alert("Successfully Registered");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  // Function to handle the Back button click
  const handleBackBtn = () => {
    navigate("/ordermodels");
  };

  // Function to handle the Clear button click
  const handleClearBtn = () => {
    window.location.reload();
  };

  return (
    <div className="addItemContainer">
      <div>
        <Navbar />
      </div>
      <div className="formBodyContainer">
        <Sidebar />
        <div style={{ width: "100%", backgroundColor: "#d7e3fc" }}>
          <h1
            style={{
              color: "black",
              marginTop: "6rem",
              marginLeft: "2rem",
              fontWeight: "bold",
            }}
          >
            Add New Model
          </h1>
          <Error errorDisplay={error} />
          <form action="">
            {/* Form input fields */}
            <div className="formBox">
              <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
              Model Name
              </label>
              <input
                type="text"
                placeholder="Enter Model Name"
                onChange={(e) => {
                  setModelName(e.target.value);
                }}
              />
            </div>
            <div className="formBox">
              <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
              Model Image
              </label>
              {/* <input
                type="text"
                placeholder="Enter Order Customer Name"
                onChange={(e) => {
                  setOrderCustomerName(e.target.value);
                }}
              /> */}
              {/* Add 4to as PDF with both front and back views*/}

            </div>
            <div>
              <label htmlFor="" style={{ marginLeft: "1rem", display: "grid" }}>
              Cloth Material with Colour
              </label>
              <input
                type="text"
                placeholder="Enter cloth material with colour"
                onChange={(e) => {
                  setClothMaterial(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="" style={{ marginLeft: "1rem", display: "grid" }}>
              Cloth Amount
              </label>
              <input
                type="number"
                placeholder="Enter Average amount of cloth in meters"
                onChange={(e) => {
                  setClothAmount(e.target.value);
                }}
              />
            </div>
            <div className="formBox">
              <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
              Button Amount
              </label>
              <input
                type="number"
                placeholder="Enter Average amount of Buttons"
                onChange={(e) => {
                  setButtonAmount(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="" style={{ marginLeft: "1rem", display: "grid" }}>
              Zipper Amount
              </label>
              <input
                type="number"
                placeholder="Enter Average amount of Zippers"
                onChange={(e) => {
                  setZipperAmount(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="" style={{ marginLeft: "1rem", display: "grid" }}>
              Elastic Amount
              </label>
              <input
                type="number"
                placeholder="Enter Average amount of elastic in meters"
                onChange={(e) => {
                  setElasticAmount(e.target.value);
                }}
              />
            </div>
          </form>
          {/* Form action buttons */}
          <div className="formButtonSection">
            <button id="backBtn" onClick={handleBackBtn}>
              Back
            </button>
            <button id="clearBtn" onClick={handleClearBtn}>
              Clear
            </button>
            <button id="addBtn" onClick={handleAddBtn}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
