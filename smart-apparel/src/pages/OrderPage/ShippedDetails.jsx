import React, { useState, useEffect } from "react";
import "./OrderDetails.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Error1 from "../../components/Error1/Error1";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

export default function ShippedDetails() {
  // State variables
  const [tableData, setTableData] = useState([]);
  const [deleteOrder, setDeleteOrder] = useState(false);

  const [modelView, setModelView] = useState("none");
  const [tableView, setTableView] = useState("block");

  const [orderId, setOrderId] = useState("");
  const [orderCustomerName, setOrderCustomerName] = useState("");
  const [orderAgreedPrice, setOrderAgreedPrice] = useState("");
  const [modelName, setModelName] = useState("");
  const [smallSize, setSmallSize] = useState("");
  const [mediumSize, setMediumSize] = useState("");
  const [largeSize, setLargeSize] = useState("");
  const [clothMaterial, setClothMaterial] = useState("");
  const [orderStatus, setOrderStatus] = useState("");

  const [shippedOrders, setShippedOrders] = useState([]);

  const [error, setError] = useState("none");

  useEffect(() => {
    const fetchShippedOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/order/shippedOrders");
        setShippedOrders(response.data.content);
        setError(null);
      } catch (error) {
        setError("Failed to fetch shipped orders");
      }
    };

    fetchShippedOrders();
  }, []);


  const handleUploadBillBtn = async (orderId) => {
    await axios
      .get(
        `http://localhost:8080/order/viewOrder/${orderId}`
      )
      .then((res) => {
        setOrderId(res.data.content.orderId);
        setOrderCustomerName(res.data.content.orderCustomerName);
        setOrderAgreedPrice(res.data.content.orderAgreedPrice);
        setModelName(res.data.content.modelName);
        setSmallSize(res.data.content.smallSize);
        setMediumSize(res.data.content.mediumSize);
        setLargeSize(res.data.content.largeSize);
        setClothMaterial(res.data.content.clothMaterial);
        setOrderStatus(res.data.content.orderStatus);

        setModelView("block");
        setTableView("none");
      })
      .catch((err) => {
        alert(err.message);
      });
  };


  const handleSubmitBtn = async () => {
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
      setTimeout(() => {
        setError("none");
      }, 2000);
    } else {
      const updateData = {
        orderId,
        orderCustomerName,
        orderAgreedPrice,
        modelName,
        smallSize,
        mediumSize,
        largeSize,
        clothMaterial,
        orderStatus,
      };
     
      await axios
        .put(
          "http://localhost:8080/order/updateOrder",
          updateData
        )
        .then((res) => {
          window.location.href = "/orderdetails";
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

 
  const handleCloseBtn = () => {
    window.location.href = "/orderdetails";
  };

  return (
    <div className="addItemContainer">
      <div>
        <Navbar />
      </div>
      <div className="formBodyContainer">
        <Sidebar />
        <div
          style={{ width: "100%", backgroundColor: "#d7e3fc", height: "100vh" }}
        >
          <h1
            style={{
              color: "black",
              marginTop: "6rem",
              marginLeft: "2rem",
              fontWeight: "bold",
            }}
          >
            Order Details
          </h1>
          <Error1 errorDisplay={error} />
          <div className="updateConatiner" style={{ display: modelView }}>
            <form action="">
              <div className="formBox">
              <Row>
                <Col xs={2}>
                <label htmlFor="" style={{ marginRight: "5.5rem" }}>
                  Order Id:{" "}
                </label>
                </Col>
                <Col>
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
                <label htmlFor="" style={{ marginRight: "3.5rem" }}>
                  Order Customer Name:{" "}
                </label>
                </Col>
                <Col>
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
                <Col xs={2}>
                <label htmlFor="" style={{ marginRight: "4rem" }}>
                  Order Agreed Price:{" "}
                </label>
                </Col>
                <Col>
                <input
                  value={orderAgreedPrice}
                  disabled
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
                <label htmlFor="" style={{ marginRight: "4rem" }}>
                  Model Name:{" "}
                </label>
                </Col>
                <Col>
                <input
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
                <label htmlFor="" style={{ marginLeft: "4.1rem" }}>
                  Order Size
                </label>
              </div>

              <div className="formBox">
              <Row>
                <Col xs={2}>
                <label htmlFor="" style={{ marginRight: "4.1rem" }}>
                  Small Size:{" "}
                </label>
                </Col>
                <Col>
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
                <label htmlFor="" style={{ marginRight: "4.1rem" }}>
                  Medium Size:{" "}
                </label>
                </Col>
                <Col>
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
                <label htmlFor="" style={{ marginRight: "4.1rem" }}>
                  Large Size:{" "}
                </label>
                </Col>
                <Col>
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
                  {" "}
                  <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
                    Cloth Material
                  </label>
                </Col>
                <Col>
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
                  {" "}
                  <label htmlFor="" style={{ marginLeft: "0.1rem" }}>
                    Order Status
                  </label>
                </Col>
                <Col>
                <input
                  value={orderStatus}
                  disabled
                  onChange={(e) => {
                    setOrderStatus(e.target.value);
                  }}
                />
                </Col>
              </Row>
            </div>
             
            </form>
            <div className="formButtonSection">
              <button id="backBtn" onClick={handleCloseBtn}>
                Close
              </button>
              <button id="addBtn" onClick={handleSubmitBtn}>
                Submit
              </button>
            </div>
          </div>
          {/* -------------------------------------------------------------------------------------------------- */}
          <div className="table-container" style={{ display: tableView }}>
            <table className="custome-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Order Id</th>
                  <th>Order Customer Name</th>
                  <th>Order Agreed Price</th>
                  <th>Model Name</th>
                  <th>Small Size</th>
                  <th>Medium Size</th>
                  <th>Large Size</th>
                  <th>Cloth Material</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.orderId}</td>
                    <td>{data.orderCustomerName}</td>
                    <td>{data.orderAgreedPrice}</td>
                    <td>{data.modelName}</td>
                    <td>{data.smallSize}</td>
                    <td>{data.mediumSize}</td>
                    <td>{data.largeSize}</td>
                    <td>{data.clothMaterial}</td>
                    <td>{data.orderStatus}</td>
                    <td>
                      <div className="tableBtn">
                        <button
                          className="editBtn"
                          onClick={() => handleUploadBillBtn(data.orderID)}
                        >
                          Upload Bill
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
