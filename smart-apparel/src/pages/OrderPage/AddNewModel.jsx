import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Error from "../../components/Error1/Error1";
import "./AddNewModel.css";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
  const [file, setFile] = useState();

  // Navigate between routes
  const navigate = useNavigate();

  // Function to handle the Add button click
  const handleAddBtn = async () => {
    if (
      !modelName ||
      !modelImage ||
      !clothMaterial ||
      !clothAmount ||
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
        clothMaterial,
        clothAmount,
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

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

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
          <Error errorDisplay={error} errorMessage={errorType} />
          <form action="">
            {/* Form input fields */}
            <div className="formBox">
              <Row>
                <Col xs={2}>
                  {" "}
                  <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
                    Model Name
                  </label>
                </Col>
                <Col>
                  <input
                    type="text"
                    placeholder="Enter Model Name"
                    onChange={(e) => {
                      setModelName(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </div>

            <div className="formBox">
              <Row>
                <p  style={{ color: "red"}}>Insert image with both front and back view.</p>
                <Col xs={2}>
                  {" "}
                  <label htmlFor="imageUpload" style={{ marginLeft: "0.1rem" }}>
                    Model Image
                  </label>
                </Col>
                <Col >
                  <input type="file" onChange={handleChange} 
                  // placeholder="Insert image with both front and back view."
                  />
                  <img src={file} style={{ width: "50%", height: "70%"}} />
                </Col>
              </Row>
            </div>

            <div className="formBox">
              <Row>
                <Col xs={2}>
                  {" "}
                  <label
                    htmlFor=""
                    style={{ marginLeft: "0.1rem", display: "grid" }}
                  >
                    Cloth Material with Colour
                  </label>
                </Col>
                <Col>
                  <input
                    type="text"
                    placeholder="Enter cloth material with colour"
                    onChange={(e) => {
                      setClothMaterial(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </div>

            <div className="formBox">
              <Row>
                <Col xs={2}>
                  {" "}
                  <label
                    htmlFor=""
                    style={{ marginLeft: "0.1rem", display: "grid" }}
                  >
                    Cloth Amount
                  </label>
                </Col>
                <Col>
                  <input
                    type="number"
                    placeholder="Enter Average amount of cloth in meters per one"
                    onChange={(e) => {
                      setClothAmount(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </div>

            <div className="formBox">
              <Row>
                <Col xs={2}>
                  {" "}
                  <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
                    Button Amount
                  </label>
                </Col>
                <Col>
                  <input
                    type="number"
                    placeholder="Enter Average amount of Buttons per one"
                    onChange={(e) => {
                      setButtonAmount(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </div>

            <div className="formBox">
              <Row>
                <Col xs={2}>
                  {" "}
                  <label
                    htmlFor=""
                    style={{ marginLeft: "0.1rem", display: "grid" }}
                  >
                    Zipper Amount
                  </label>
                </Col>
                <Col>
                  <input
                    type="number"
                    placeholder="Enter Average amount of Zippers per one"
                    onChange={(e) => {
                      setZipperAmount(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="formBox">
              <Row>
                <Col xs={2}>
                  {" "}
                  <label
                    htmlFor=""
                    style={{ marginLeft: "0.1rem", display: "grid" }}
                  >
                    Elastic Amount
                  </label>
                </Col>
                <Col>
                  <input
                    type="number"
                    placeholder="Enter Average amount of elastic in meters per one"
                    onChange={(e) => {
                      setElasticAmount(e.target.value);
                    }}
                  />
                </Col>
              </Row>
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
