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
  const orderId = location.state?.orderId || "";

  const [orderCustomerName, setOrderCustomerName] = useState("");
  const [smallSize, setSmallSize] = useState("");
  const [mediumSize, setMediumSize] = useState("");
  const [largeSize, setLargeSize] = useState("");
  const [clothMaterial, setClothMaterial] = useState("");
  const [coveredAmount, setCoveredAmount] = useState("");

  const [error, setError] = useState("none");
  const [errorType, setErrorType] = useState("none");
  const errorMsg = ["Error in updating."];

  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (orderId) {
      axios
        .get(`http://localhost:8080/smart-apperal/api/orders/orders/${orderId}`)
        .then((res) => {
          const orderData = res.data;
          setOrderCustomerName(orderData.orderCustomerName);
          setSmallSize(orderData.smallSize);
          setMediumSize(orderData.mediumSize);
          setLargeSize(orderData.largeSize);
          setClothMaterial(orderData.clothMaterial);
          setCoveredAmount(orderData.coveredAmount);
          setIsButtonDisabled(false);
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

  // const handleUpdateBtn = async () => {
  //   if (
  //     // !orderId ||
  //     // !orderCustomerName ||
  //     // !smallSize ||
  //     // !mediumSize ||
  //     // !largeSize ||
  //     // !clothMaterial ||
  //     !coveredAmount
  //   ) {
  //     setError("block");
  //     setErrorType(errorMsg[0]);
  //     setTimeout(() => {
  //       setError("none");
  //     }, 2000);
  //   } else {
  //     const formData = {
  //       // orderId,
  //       // orderCustomerName,
  //       // smallSize,
  //       // mediumSize,
  //       // largeSize,
  //       // clothMaterial,
  //       coveredAmount,
  //     };
  //     await axios
  //       .post(
  //         "http://localhost:8080/smart-apperal/api/order/linesupervisorcoveredamountform",
  //         formData
  //       )
  //       .then((res) => {
  //         alert("Successfully Updated");
  //       })
  //       .catch((err) => {
  //         alert(err.message);
  //       });
  //   }
  // };

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
        .post(
          "http://localhost:8080/smart-apperal/api/order/linesupervisorcoveredamountform",
          formData
        )
        .then((res) => {
          alert("Successfully Updated");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const handleBackBtn = () => {
    navigate("/linesupervisorordercoveredamount");
  };

  const handleEditBtn = async (orderId) => {
    await axios
      .get(`http://localhost:8080/smart-apperal/api/orders/orders/${orderId}`)
      .then((res) => {
        setCoveredAmount(res.data.orderStatus);
      })
      .catch((err) => {
        alert(err.message);
      });
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
            Update Covered Order Amount
          </h1>
          <Error errorDisplay={error} errorMessage={errorType} />
          <form action="">
            <div className="formBox">
              <Row>
                <Col xs={2}>
                  {" "}
                  <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
                    Order Id
                  </label>
                </Col>
                <Col>
                  <input value={orderId} disabled />
                </Col>
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
                  <input value={orderCustomerName} disabled />
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
                  {" "}
                  <label
                    htmlFor=""
                    style={{ marginLeft: "1rem", display: "grid" }}
                  >
                    Small Size
                  </label>
                </Col>
                <Col>
                  <input value={smallSize} disabled />
                </Col>
              </Row>
            </div>

            <div className="formBox">
              <Row>
                <Col xs={2}>
                  {" "}
                  <label
                    htmlFor=""
                    style={{ marginLeft: "1rem", display: "grid" }}
                  >
                    Medium Size
                  </label>
                </Col>
                <Col>
                  <input value={mediumSize} disabled />
                </Col>
              </Row>
            </div>

            <div className="formBox">
              <Row>
                <Col xs={2}>
                  {" "}
                  <label
                    htmlFor=""
                    style={{ marginLeft: "1rem", display: "grid" }}
                  >
                    Large Size
                  </label>
                </Col>
                <Col>
                  <input value={largeSize} disabled />
                </Col>
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
                  <input value={clothMaterial} disabled />
                </Col>
              </Row>
            </div>

            <div className="formBox">
              <Row>
                <Col xs={2}>
                  {" "}
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
                      setCoveredAmount(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </div>

            {/* <div className="formBox">
              <Row>
                <Col xs={2}>
                  {' '}
                  <label htmlFor="" style={{ marginLeft: '0.1rem' }}>
                    Model Name
                  </label>
                </Col>
                <Col>
                  <input
                    type="text"
                    value={modelName} // Set the value to the modelName state
                    disabled // Make the input field disabled to prevent user input
                  />
                </Col>
              </Row>
            </div> */}
          </form>

          <div className="formButtonSection">
            <button id="backBtn" onClick={handleBackBtn}>
              Back
            </button>
            <button id="editBtn" onClick={handleEditBtn}>
              Edit
            </button>
            <button
              id="addBtn"
              onClick={handleUpdateBtn}
              disabled={isButtonDisabled}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
