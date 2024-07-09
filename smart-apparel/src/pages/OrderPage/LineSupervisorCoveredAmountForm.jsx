import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./LineSupervisorCoveredAmountForm.css";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Error from "../../components/Error1/ErrorUpdate";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function LineSupervisorCoveredAmountForm() {
  const location = useLocation();
  const initialorderId = location.state?.orderId || ""; // Get the orderId from the route state
  const [orderId, setOrderId] = useState(initialorderId);

  // State variables to hold form data and error states
  const [orderCustomerName, setOrderCustomerName] = useState("");
  const [smallSize, setSmallSize] = useState("");
  const [mediumSize, setMediumSize] = useState("");
  const [largeSize, setLargeSize] = useState("");
  const [clothMaterial, setClothMaterial] = useState("");
  const [coveredAmount, setCoveredAmount] = useState("");

  const [error, setError] = useState("none");
  const [errorType, setErrorType] = useState("none");
  const errorMsg = ["Error in updating."];

  const navigate = useNavigate(); // Hook for navigation
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // State to manage button disabled status

  // Fetch order details when the component mounts
  useEffect(() => {
    if (orderId) {
      axios
        .get(`http://localhost:8080/order/viewOrder/${orderId}`)
        .then((res) => {
          const orderData = res.data;
          setOrderCustomerName(orderData.content.orderCustomerName);
          setSmallSize(orderData.content.smallSize);
          setMediumSize(orderData.content.mediumSize);
          setLargeSize(orderData.content.largeSize);
          setClothMaterial(orderData.content.clothMaterial);
          setCoveredAmount(orderData.content.coveredAmount);
          setIsButtonDisabled(false); // Enable the update button
        })
        .catch((err) => {
          setError("block");
          setErrorType(err.message);
          setTimeout(() => {
            setError("none");
          }, 2000);
        });
    }
  }, [orderId]);

  // Handle the update button click
  const handleUpdateBtn = async () => {
    if (!coveredAmount) {
      setError("block");
      setErrorType(errorMsg[0]);
      setTimeout(() => {
        setError("none");
      }, 2000);
    } else {
      const formData = {
        coveredAmount,
      };
      await axios
        .get(`http://localhost:8080/order/viewOrder/${orderId}`,formData)
        // .get(`http://localhost:8080/order/viewOrder`,formData)
        .then((res) => {
          alert("Successfully Updated");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  // Handle the back button click
  const handleBackBtn = () => {
    navigate("/linesupervisorordercoveredamount");
  };

  return (
    <div className="addItemContainer">
      <div>
        <Navbar /> {/* Navbar component */}
      </div>
      <div className="formBodyContainer">
        <Sidebar /> {/* Sidebar component */}
        <div style={{ width: "100%", backgroundColor: "#d7e3fc" }}>
          <h1
            style={{
              color: "black",
              marginTop: "6rem",
              marginLeft: "2rem",
              fontWeight: "bold",
            }}
          >
            Update Covered Order Amount
          </h1>
          <Error errorDisplay={error} errorMessage={errorType} />
          {/* Error component */}
          <form action="" className="form-class">
            <div className="formBox">
              <Row>
                <Col xs={2}>
                  <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
                    Order Id
                  </label>
                </Col>
                <Col>
                  {/* Disabled input for orderId */}
                  <input
                    value={orderId}
                    disabled
                    onChange={(e) => {
                      setOrderId(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </div>

            <div className="formBox">
              <Row>
                <Col xs={2}>
                  <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
                    Order Customer Name
                  </label>
                </Col>
                <Col>
                  {/* Disabled input for orderCustomerName */}
                  <input
                    value={orderCustomerName}
                    disabled
                    onChange={(e) => {
                      setOrderCustomerName(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </div>

            <div className="formBox">
              <Row>
                <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
                  Order Size
                </label>
              </Row>
            </div>

            <div className="formBox">
              <Row>
                <Col xs={2}>
                  <label
                    htmlFor=""
                    style={{ marginLeft: "1rem", display: "grid" }}
                  >
                    Small Size
                  </label>
                </Col>
                <Col>
                  {/* Disabled input for smallSize */}
                  <input
                    value={smallSize}
                    disabled
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
                  <label
                    htmlFor=""
                    style={{ marginLeft: "1rem", display: "grid" }}
                  >
                    Medium Size
                  </label>
                </Col>
                <Col>
                  {/* Disabled input for mediumSize */}

                  <input
                    value={mediumSize}
                    disabled
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
                  <label
                    htmlFor=""
                    style={{ marginLeft: "1rem", display: "grid" }}
                  >
                    Large Size
                  </label>
                </Col>
                <Col>
                  {/* Disabled input for largeSize */}

                  <input
                    value={largeSize}
                    disabled
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
                  <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
                    Cloth Material
                  </label>
                </Col>
                <Col>
                  {/* Disabled input for clothMaterial */}

                  <input
                    value={clothMaterial}
                    disabled
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
                  <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
                    Covered Amount
                  </label>
                </Col>
                <Col>
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    value={coveredAmount}
                    onChange={(e) => {
                      setCoveredAmount(e.target.value); // Update the coveredAmount state
                    }}
                  />
                </Col>
              </Row>
            </div>
          </form>
          <div className="formButtonSection">
            <button id="backBtn" onClick={handleBackBtn}>
              Back
            </button>

            <button
              id="addBtn"
              onClick={handleUpdateBtn}
              disabled={isButtonDisabled} // Conditionally disable the button
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
