import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderRegister.css";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Error from "../../components/Error1/Error1";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function OrderRegister() {
  // State variables
  const [orderId, setOrderId] = useState("");
  const [orderCustomerName, setOrderCustomerName] = useState("");
  const [orderAgreedPrice, setOrderAgreedPrice] = useState("");
  const [smallSize, setSmallSize] = useState("");
  const [mediumSize, setMediumSize] = useState("");
  const [largeSize, setLargeSize] = useState("");
  const [clothMaterial, setClothMaterial] = useState("");

  const [error, setError] = useState("none");
  const [errorType, setErrorType] = useState("none");
  const errorMsg = ["All fields are required"];

  // Navigate between routes
  const navigate = useNavigate();

  // Function to handle the Add button click
  const handleAddBtn = async () => {
    if (
      !orderId ||
      !orderCustomerName ||
      !orderAgreedPrice ||
      !smallSize ||
      !mediumSize ||
      !largeSize ||
      !clothMaterial
    ) {
      setError("block");
      setErrorType(errorMsg[0]);
      setTimeout(() => {
        setError("none");
      }, 2000);
    } else {
      const formData = {
        orderId,
        orderCustomerName,
        orderAgreedPrice,
        smallSize,
        mediumSize,
        largeSize,
        clothMaterial,
      };
      await axios
        .post(
          "http://localhost:8080/smart-apperal/api/order/orderregister",
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
    navigate("/orders");
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
            Order Register
          </h1>
          <Error errorDisplay={error} />
          <form action="">
            {/* Form input fields */}
            <div className="formBox">
              <Row>
                <Col xs={2}>
                  {" "}
                  <label htmlFor="" style={{ marginRight: "0.1rem" }}>
                    Order ID
                  </label>
                </Col>
                <Col>
                <input
                type="number"
                placeholder="Enter Order Id"
                onChange={(e) => {
                  setOrderId(e.target.value);
                }}
              /></Col>
              </Row>
            </div>

            <div className="formBox">
                <Row>
                <Col xs={2}>
                  {" "}
              <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
                Order Customer Name
              </label>
              </Col>
              <Col>
              <input
                type="text"
                placeholder="Enter Order Customer Name"
                onChange={(e) => {
                  setOrderCustomerName(e.target.value);
                }}
              /></Col>
              </Row>
            </div>

            <div className="formBox">
            <Row>
                <Col xs={2}>
                  {" "}
              <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
                Order Agreed Price
              </label>
              </Col>
              <Col>
              <input
                type="number"
                placeholder="Enter Order Agreed Price"
                onChange={(e) => {
                  setOrderAgreedPrice(e.target.value);
                }}
              /></Col>
              </Row>
            </div>

            <div className="formBox">
            <Row>
                {/* <Col xs={2}> */}
                  {" "}
              <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
                Order Size
              </label>
              {/* </Col> */}
              </Row>
            </div>

            <div>
            <Row>
                <Col xs={2}>
                  {" "}
              <label htmlFor="" style={{ marginLeft: "1rem", display: "grid" }}>
                Small Size
              </label>
              </Col>
              <Col>
              <input
                type="number"
                placeholder="Enter Amount"
                onChange={(e) => {
                  setSmallSize(e.target.value);
                }}
              /></Col>
              </Row>
            </div>

            <div>
            <Row>
                <Col xs={2}>
                  {" "}
              <label htmlFor="" style={{ marginLeft: "1rem", display: "grid" }}>
                Medium Size
              </label>
              </Col>
              <Col>
              <input
                type="number"
                placeholder="Enter Amount"
                onChange={(e) => {
                  setMediumSize(e.target.value);
                }}
              /></Col>
              </Row>
            </div>

            <div>
            <Row>
                <Col xs={2}>
                  {" "}
              <label htmlFor="" style={{ marginLeft: "1rem", display: "grid" }}>
                Large Size
              </label>
              </Col>
              <Col>
              <input
                type="number"
                placeholder="Enter Amount"
                onChange={(e) => {
                  setLargeSize(e.target.value);
                }}
              /></Col>
              </Row>
            </div>

            <div className="formBox">
            <Row>
                <Col xs={2}>
                  {" "}
              <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
                Cloth Material
              </label>
              </Col>
              <Col>
              <select id="cloth-material" onChange={(e) => {
            setClothMaterial(e.target.value);
          }}>
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
          </select></Col>
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
