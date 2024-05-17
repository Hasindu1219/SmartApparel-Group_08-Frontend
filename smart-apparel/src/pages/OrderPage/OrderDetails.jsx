import React, { useState, useEffect } from "react";
import "./OrderDetails.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Error1 from "../../components/Error1/Error1";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";

export default function OrderDetails() {
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

  const [error, setError] = useState("none");

  useEffect(() => {
    axios
      .get("http://localhost:8080/order/viewOrder")
      .then((res) => {
        setTableData(res.data.content);
        // const js = JSON.parse(res.data)
        // console.log(js)
        //console.log(res.data.content)
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [deleteOrder]);

  // Function to handle delete button click
  const handleDeleteBtn = async (orderId) => {
    await axios
      .delete(
        `http://localhost:8080/smart-apperal/api/order/deleteOrder/${orderId}`
      )
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
      .get(
        `http://localhost:8080/smart-apperal/api/order/updateOrder/${orderId}`
      )
      .then((res) => {
        setOrderId(res.data.orderID);
        setOrderCustomerName(res.data.orderCustomerName);
        setOrderAgreedPrice(res.data.orderAgreedPrice);
        setModelName(res.data.modelName);
        setSmallSize(res.data.smallSize);
        setMediumSize(res.data.mediumSize);
        setLargeSize(res.data.largeSize);
        setClothMaterial(res.data.clothMaterial);
        setOrderStatus(res.data.orderStatus);

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
      !orderId ||
      !orderCustomerName ||
      !orderAgreedPrice ||
      !modelName ||
      !smallSize ||
      !mediumSize ||
      !largeSize ||
      !clothMaterial ||
      !orderStatus
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
          "http://localhost:8080/smart-apperal/api/order/updateOrder",
          updateData
        )
        .then((res) => {
          window.location.href = "/order/orderviewdelete";
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  // Function to handle close button click
  const handleCloseBtn = () => {
    window.location.href = "/orders/orderviewdelete";
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
                <label htmlFor="" style={{ marginRight: "5.5rem" }}>
                  Order Id:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Order ID"
                  disabled
                  value={orderId}
                  onChange={(e) => {
                    setOrderId(e.target.value);
                  }}
                />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "3.5rem" }}>
                  Order Customer Name:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Order Customer Name"
                  value={orderCustomerName}
                  onChange={(e) => {
                    setOrderCustomerName(e.target.value);
                  }}
                />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4rem" }}>
                  Order Agreed Price:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Order Agreed Price"
                  value={orderAgreedPrice}
                  onChange={(e) => {
                    setOrderAgreedPrice(e.target.value);
                  }}
                />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4rem" }}>
                  Model Name:{" "}
                </label>
                <input
                  type="text"
                  //placeholder="Enter Mode lName"
                  value={modelName}
                  disabled
                  // onChange={(e) => {
                  //   setModelName(e.target.value);
                  // }}
                />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginLeft: "4.1rem" }}>
                  Order Size
                </label>
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4.1rem" }}>
                  Small Size:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Small Size"
                  value={smallSize}
                  onChange={(e) => {
                    setSmallSize(e.target.value);
                  }}
                />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4.1rem" }}>
                  Medium Size:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Medium Size"
                  value={mediumSize}
                  onChange={(e) => {
                    setMediumSize(e.target.value);
                  }}
                />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4.1rem" }}>
                  Large Size:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Lerge Size"
                  value={largeSize}
                  onChange={(e) => {
                    setLargeSize(e.target.value);
                  }}
                />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4.1rem" }}>
                  Cloth Material:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Cloth Material"
                  value={clothMaterial}
                  onChange={(e) => {
                    setClothMaterial(e.target.value);
                  }}
                />
              </div>
              {/* Cloth Material drop down */}
            </form>
            <div className="formButtonSection">
              <button id="backBtn" onClick={handleCloseBtn}>
                Close
              </button>
              <button id="addBtn" onClick={handleUpdateBtn}>
                Update
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
                    <td>
                      {data.orderStatus}
                      <Dropdown>
                        {/* <Dropdown.Toggle onChange={(e) => {setClothMaterial(e.target.value);}}>
                        Select Material
                      </Dropdown.Toggle> */}

                        <Dropdown.Menu
                          onChange={(e) => {
                            setOrderStatus(e.target.value);
                          }}
                        >
                          <Dropdown.Item>Pending</Dropdown.Item>
                          <Dropdown.Item>Started</Dropdown.Item>
                          <Dropdown.Item>Processing</Dropdown.Item>
                          <Dropdown.Item>Quality Certified</Dropdown.Item>
                          <Dropdown.Item>Shipped</Dropdown.Item>
                          <Dropdown.Item>Delivered</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      {/* <select>
                    <option value="Pending">Pending</option>
                    <option value="Started">Started</option>
                    <option value="Processing">Processing</option>
                    <option value="Quality Certified">Quality Certified</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select> */}
                    </td>
                    <td>
                      <div className="tableBtn">
                        <button
                          className="editBtn"
                          onClick={() => handleEditBtn(data.orderID)}
                        >
                          Edit
                        </button>
                        <button
                          className="deleteBtn"
                          onClick={() => handleDeleteBtn(data.orderID)}
                        >
                          Delete
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
