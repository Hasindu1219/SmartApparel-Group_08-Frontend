import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./OrderRegister.css";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Error from "../../components/Error1/Error1";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CheckInventory from "./CheckInventory";

export default function OrderRegister() {
  // State variables for form inputs
  const [orderCustomerName, setOrderCustomerName] = useState("");
  const [orderAgreedPrice, setOrderAgreedPrice] = useState("");
  const [smallSize, setSmallSize] = useState("");
  const [mediumSize, setMediumSize] = useState("");
  const [largeSize, setLargeSize] = useState("");
  const [clothMaterial, setClothMaterial] = useState("");
  const [orderStatus, setOrderStatus] = useState("Pending");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [error, setError] = useState("none");
  const [errorType, setErrorType] = useState("none");
  const errorMsg = ["All fields are required"];

  const navigate = useNavigate();
  const location = useLocation();
  const initialModelName = location.state?.modelName || "";
  const [modelName, setModelName] = useState(initialModelName);

  // Function to handle Add button click
  const handleAddBtn = async (e) => {
    e.preventDefault();
    setError("none");
    setErrorType("none");

    // Check if all fields are filled
    if (!orderCustomerName || !orderAgreedPrice || !smallSize || !mediumSize || !largeSize || !clothMaterial) {
      // Display error message if any field is empty
      setError("block");
      setErrorType(errorMsg[0]);
      setTimeout(() => {
        setError("none");
      }, 2000);
    } else {
      // Prepare form data to be sent to the server
      const formData = {
        orderCustomerName,
        orderAgreedPrice,
        modelName,
        smallSize,
        mediumSize,
        largeSize,
        clothMaterial,
        orderStatus,
      };
      console.log(formData);
      
      // Send a POST request to save the order
      try {
        const res = await axios.post("http://localhost:8080/order/saveOrder", formData);
        if (res.data.code === "00") {
          // Display success message and navigate to order details
          setError("block");
          setErrorType("success");
          setTimeout(() => {
            navigate("/orderdetails");
          }, 3000);
        } else if (res.data.code === "06") {
          // Display warning message
          setError("block");
          setErrorType("warning");
        } else {
          // Display error message
          setError("block");
          setErrorType("danger");
        }
      } catch (err) {
        // Display error message if request fails
        setError("block");
        setErrorType("danger");
        console.error("Error saving order:", err);
      }
    }
  };

  // Function to handle Back button click
  const handleBackBtn = () => {
    navigate("/ordermodels");
  };

  // Function to handle Clear button click
  const handleClearBtn = () => {
    window.location.reload();
  };

  return (
    <div className="addItemContainer">
      <Navbar />
      <div className="formBodyContainer">
        <Sidebar />
        <div style={{ width: "100%", backgroundColor: "#d7e3fc" }}>
          <h1 style={{ color: "black", marginTop: "6rem", marginLeft: "2rem", fontWeight: "bold" }}>
            Order Register
          </h1>
          {/* Error component for displaying error messages */}
          <Error errorDisplay={error} errorMessage={errorType} />
          <form className="form-class">
            {/* Form input fields */}
            <div className="formBox">
              <Row>
                <Col xs={2}>
                  <label htmlFor="" style={{ marginLeft: "0.1rem" }}>Order Customer Name</label>
                </Col>
                <Col>
                  <input
                    type="text"
                    value={orderCustomerName}
                    placeholder="Enter Order Customer Name"
                    onChange={(e) => {
                      setOrderCustomerName(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="formBox">
              <Row>
                <Col xs={2}>
                  <label htmlFor="" style={{ marginLeft: "0.1rem" }}>Order Agreed Price</label>
                </Col>
                <Col>
                  <input
                    type="number"
                    value={orderAgreedPrice}
                    placeholder="Enter Order Agreed Price"
                    onChange={(e) => {
                      setOrderAgreedPrice(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="formBox">
              <Row>
                <Col xs={2}>
                  <label htmlFor="" style={{ marginLeft: "0.1rem" }}>Model Name</label>
                </Col>
                <Col>
                  <input
                    type="text"
                    value={modelName}
                    disabled
                    onChange={(e) => {
                      setModelName(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="formBox">
              <Row>
                <label htmlFor="" style={{ marginLeft: "0.1rem" }}>Order Size</label>
              </Row>
            </div>
            <div className="formBox">
              <Row>
                <Col xs={2}>
                  <label htmlFor="" style={{ marginLeft: "1rem", display: "grid" }}>Small Size</label>
                </Col>
                <Col>
                  <input
                    type="number"
                    value={smallSize}
                    placeholder="Enter Amount"
                    onChange={(e) => {
                      setSmallSize(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="formBox">
              <Row>
                <Col xs={2}>
                  <label htmlFor="" style={{ marginLeft: "1rem", display: "grid" }}>Medium Size</label>
                </Col>
                <Col>
                  <input
                    type="number"
                    value={mediumSize}
                    placeholder="Enter Amount"
                    onChange={(e) => {
                      setMediumSize(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="formBox">
              <Row>
                <Col xs={2}>
                  <label htmlFor="" style={{ marginLeft: "1rem", display: "grid" }}>Large Size</label>
                </Col>
                <Col>
                  <input
                    type="number"
                    value={largeSize}
                    placeholder="Enter Amount"
                    onChange={(e) => {
                      setLargeSize(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="formBox">
              <Row>
                <Col xs={2}>
                  <label htmlFor="" style={{ marginLeft: "0.1rem" }}>Cloth Material</label>
                </Col>
                <Col>
                  <select
                    id="cloth-material"
                    value={clothMaterial}
                    onChange={(e) => {
                      setClothMaterial(e.target.value);
                    }}
                  >
                    <option value="Cotton-Red">Cotton-Red</option>
                    <option value="Cotton-Green">Cotton-Green</option>
                    <option value="Cotton-Purple">Cotton-Purple</option>
                    <option value="Cotton-Blue">Cotton-Blue</option>
                    <option value="Linen-Red">Linen-Red</option>
                    <option value="Linen-Green">Linen-Green</option>
                    <option value="Linen-Purple">Linen-Purple</option>
                    <option value="Linen-Blue">Linen-Blue</option>
                    <option value="Lace-Red">Lace-Red</option>
                    <option value="Lace-Green">Lace-Green</option>
                    <option value="Lace-Purple">Lace-Purple</option>
                    <option value="Lace-Blue">Lace-Blue</option>
                  </select>
                </Col>
              </Row>
            </div>
            <div className="formBox">
              <Row>
                <Col xs={2}>
                  <label htmlFor="" style={{ marginLeft: "0.1rem" }}>Order Status</label>
                </Col>
                <Col>
                  <input
                    type="text"
                    value={orderStatus}
                    disabled
                    onChange={(e) => {
                      setOrderStatus("Pending");
                    }}
                  />
                </Col>
              </Row>
            </div>
          </form>
          {/* Form action buttons */}
          <div className="formButtonSection">
            <button id="backBtn" onClick={handleBackBtn}>Back</button>
            <button id="clearBtn" onClick={handleClearBtn}>Clear</button>
            <CheckInventory
              smallSize={smallSize}
              mediumSize={mediumSize}
              largeSize={largeSize}
              clothMaterial={clothMaterial}
              modelName={modelName}
              setIsButtonDisabled={setIsButtonDisabled}
            />
            <button id="addBtn" onClick={handleAddBtn} >Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
