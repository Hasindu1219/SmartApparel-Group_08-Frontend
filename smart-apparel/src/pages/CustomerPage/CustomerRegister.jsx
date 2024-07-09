import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerRegister.css";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Error from "../../components/Error1/Error1";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CustomerRegister() {
  // State variables for form inputs
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerCompanyName, setCustomerCompanyName] = useState("");
  const [customerReference, setCustomerReference] = useState("");
  const [customerPhoneNum, setCustomerPhoneNum] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");

  // State variables for error handling
  const [error, setError] = useState("none");
  const [errorType, setErrorType] = useState("none");
  const errorMsg = ["All fields are required"];

  const navigate = useNavigate();

  // Function to handle the Register button click event
  const handleAddBtn = async () => {
    // Check if all fields are filled
    if (
      !customerName ||
      !customerAddress ||
      !customerEmail ||
      !customerCompanyName ||
      !customerReference ||
      !customerPhoneNum ||
      !customerPassword
    ) {
      // Display error message if any field is empty
      setError("block");
      setErrorType(errorMsg[0]);
      setTimeout(() => {
        setError("none");
      }, 2000);
    } else {
      // Prepare form data to be sent to the server
      const formData = {
        customerName,
        customerAddress,
        customerEmail,
        customerCompanyName,
        customerReference,
        customerPhoneNum,
        customerPassword,
      };

      // Send a POST request to register the customer
      await axios
        .post("http://localhost:8080/customer/saveCustomer", formData)
        .then((res) => {
          setError("block");
          setErrorType("success");
          setTimeout(() => {
            navigate("/customerdetails");
          }, 3000);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  // Function to handle the Back button click event
  const handleBackBtn = () => {
    navigate("/customer");
  };

  // Function to handle the Clear button click event
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
            Customer Register
            <Button
              onClick={() => {
                navigate("/customers");
              }}
            >
              {" "}
              <ArrowBackIosNewIcon />{" "}
            </Button>
          </h1>
          <Error errorDisplay={error} />
          {/* Input Fields */}
          <form action="" className="customer-register-form">
            <div className="formBox">
            <Row>
                  <Col xs={2}>
              <label htmlFor="" style={{ marginRight: "4rem" }}>
                Customer Name:{" "}
              </label>
              </Col>
              <Col>
              <input
                type="text"
                placeholder="Enter Customer Name"
                onChange={(e) => {
                  setCustomerName(e.target.value);
                }}
              />
              </Col>
              </Row>
            </div>
            <div className="formBox">
            <Row>
                  <Col xs={2}>
              <label htmlFor="" style={{ marginRight: "4rem" }}>
                Customer Address:{" "}
              </label>
              </Col>
              <Col>
              <input
                type="text"
                placeholder="Enter Customer Address"
                onChange={(e) => {
                  setCustomerAddress(e.target.value);
                }}
              />
              </Col>
              </Row>
            </div>
            <div className="formBox">
            <Row>
                  <Col xs={2}>
              <label htmlFor="" style={{ marginRight: "4.1rem" }}>
                Customer Email:{" "}
              </label>
              </Col>
              <Col>
              <input
                type="text"
                placeholder="Enter Customer Email"
                onChange={(e) => {
                  setCustomerEmail(e.target.value);
                }}
              />
              </Col>
              </Row>
            </div>
            <div className="formBox">
            <Row>
                  <Col xs={2}>
              <label htmlFor="" style={{ marginRight: "4rem" }}>
                Customer Company Name:{" "}
              </label>
              </Col>
              <Col>
              <input
                type="text"
                placeholder="Enter Customer Company Name"
                onChange={(e) => {
                  setCustomerCompanyName(e.target.value);
                }}
              />
              </Col>
              </Row>
            </div>
            <div className="formBox">
            <Row>
                  <Col xs={2}>
              <label htmlFor="" style={{ marginRight: "4.1rem" }}>
                Customer Reference:{" "}
              </label>
              </Col>
              <Col>
              <input
                type="text"
                placeholder="Enter Customer Reference"
                onChange={(e) => {
                  setCustomerReference(e.target.value);
                }}
              />
              </Col>
              </Row>
            </div>
            <div className="formBox">
            <Row>
                  <Col xs={2}>
              <label htmlFor="" style={{ marginRight: "6.6rem" }}>
                Customer Phone Number:{" "}
              </label>
              </Col>
              <Col>
              <input
                type="number"
                placeholder="Enter Customer Phone Number"
                onChange={(e) => {
                  setCustomerPhoneNum(e.target.value);
                }}
              />
              </Col>
              </Row>
            </div>
            <div className="formBox">
            <Row>
                  <Col xs={2}>
              <label htmlFor="" style={{ marginRight: "4rem" }}>
                Customer Password:{" "}
              </label>
              </Col>
              <Col>
              <input
                type="text"
                placeholder="Enter Customer Password"
                onChange={(e) => {
                  setCustomerPassword(e.target.value);
                }}
              />
              </Col>
              </Row>
            </div>
          </form>
          {/* Action buttons */}
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
