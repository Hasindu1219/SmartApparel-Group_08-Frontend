import React, { useState, useEffect } from "react";
import "./OrderDetails.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Error1 from "../../components/Error1/Error1";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function OrderDetails() {
  // State variables
  const navigate = useNavigate();
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

  const [error, setError] = useState("none");

  // Fetch order data from the server on component mount and whenever deleteOrder changes
  useEffect(() => {
    axios
      .get("http://localhost:8080/order/viewOrder")
      .then((res) => {
        setTableData(res.data.content);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [deleteOrder]);

  // Function to handle delete button click
  const handleDeleteBtn = async (orderId) => {
    await axios
      .delete(`http://localhost:8080/order/deleteOrder/${orderId}`)
      .then((res) => {
        setDeleteOrder(true);
        alert("Delete Successfully");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // Function to handle edit button click
  const handleEditBtn = async (orderId) => {
    await axios
      .get(`http://localhost:8080/order/viewOrder/${orderId}`)
      .then((res) => {
        const data = res.data.content;
        setOrderId(data.orderId);
        setOrderCustomerName(data.orderCustomerName);
        setOrderAgreedPrice(data.orderAgreedPrice);
        setModelName(data.modelName);
        setSmallSize(data.smallSize);
        setMediumSize(data.mediumSize);
        setLargeSize(data.largeSize);
        setClothMaterial(data.clothMaterial);
        setOrderStatus(data.orderStatus);

        // Switch view to the update form
        setModelView("block");
        setTableView("none");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // Function to handle update button click
  const handleUpdateBtn = async () => {
    if (
      // Validate form input fields
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
      // Send update request to the server
      await axios
        .put("http://localhost:8080/order/updateOrder", updateData)
        .then((res) => {
          window.location.href = "/orderdetails";
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  // Function to handle close button click
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
            <Button onClick={() => { navigate('/orders') }}> <ArrowBackIosNewIcon/> </Button>
          </h1>
          <Error1 errorDisplay={error} />
          <div className="updateConatiner" style={{ display: modelView }}>
            <form action="" className="form-class">
              <div className="formBox">
                <Row>
                  <Col xs={2}>
                    <label htmlFor="" style={{ marginRight: "5.5rem" }}>
                      Order Id:{" "}
                    </label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      placeholder="Enter Order ID"
                      disabled
                      value={orderId}
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
                      type="text"
                      placeholder="Enter Order Customer Name"
                      value={orderCustomerName}
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
                      type="text"
                      placeholder="Enter Order Agreed Price"
                      value={orderAgreedPrice}
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
                    <input type="text" value={modelName} disabled />
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
                      type="text"
                      placeholder="Enter Small Size"
                      value={smallSize}
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
                      type="text"
                      placeholder="Enter Medium Size"
                      value={mediumSize}
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
                      type="text"
                      placeholder="Enter Large Size"
                      value={largeSize}
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
                    <select
                      value={clothMaterial}
                      onChange={(e) => {
                        setClothMaterial(e.target.value);
                      }}
                    >
                      <option value="Cotton-Red">Cotton-Red</option>
                      <option value="Cotton-Green">Cotton-Green</option>
                      <option value="Cotton-Blue">Cotton-Blue</option>
                      <option value="Silk-Red">Silk-Red</option>
                      <option value="Silk-Green">Silk-Green</option>
                      <option value="Silk-Blue">Silk-Blue</option>
                      <option value="Velvet-Red">Velvet-Red</option>
                      <option value="Velvet-Green">Velvet-Green</option>
                      <option value="Velvet-Blue">Velvet-Blue</option>
                    </select>
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
                    <select
                      value={orderStatus}
                      onChange={(e) => {
                        setOrderStatus(e.target.value);
                      }}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Started">Started</option>
                      <option value="Processing">Processing</option>
                      <option value="Quality Certified">Quality Certified</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </Col>
                </Row>
              </div>

              <div className="formButtonSection">
                <button id="addBtn" onClick={handleUpdateBtn}>
                  Update
                </button>
                <button id="backBtn" onClick={handleCloseBtn}>
                  Close
                </button>
              </div>
            </form>
          </div>

          <div
            style={{
              marginTop: "5rem",
              marginLeft: "2rem",
              marginRight: "2rem",
              display: tableView,
            }}
          >
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Order Customer Name</th>
                  <th scope="col">Order Agreed Price</th>
                  <th scope="col">Model Name</th>
                  <th scope="col">Small Size</th>
                  <th scope="col">Medium Size</th>
                  <th scope="col">Large Size</th>
                  <th scope="col">Cloth Material</th>
                  <th scope="col">Order Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map(
                  (item) =>
                    item && (
                      <tr key={item.orderId}>
                        <td>{item.orderId}</td>
                        <td>{item.orderCustomerName}</td>
                        <td>{item.orderAgreedPrice}</td>
                        <td>{item.modelName}</td>
                        <td>{item.smallSize}</td>
                        <td>{item.mediumSize}</td>
                        <td>{item.largeSize}</td>
                        <td>{item.clothMaterial}</td>
                        <td>{item.orderStatus}</td>
                        <td>
                          <div className="tableBtn">
                            <button
                              className="editBtn"
                              onClick={() => handleEditBtn(item.orderId)}
                            >
                              Edit
                            </button>
                            <button
                              className="deleteBtn"
                              onClick={() => handleDeleteBtn(item.orderId)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
