import React, { useState, useEffect } from 'react';
import './CustomerPage/CustomerDetails.css';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import Error1 from '../../components/Error1/Error1';
import axios from 'axios';

export default function OrderDetails() {
  // State variables
  const [tableData, setTableData] = useState([]);
  const [deleteOrder, setDeleteOrder] = useState(false);

  const [modelView, setModelView] = useState("none");
  const [tableView, setTableView] = useState("block");

  const [orderId, setOrderId] = useState("");
  const [ordercustomerName, setOrderCustomerName] = useState("");
  const [orderAddress, setOrderAddress] = useState("");
  const [orderEmail, setOrderEmail] = useState("");
  const [orderPhoneNum, setOrderPhoneNum] = useState("");

  const [error, setError] = useState("none");

  useEffect(() => {
    axios
      .get('http://localhost:8080/smart-apperal/api/order/order')
      .then((res) => {
        setTableData(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [deleteOrder]);

  // Function to handle delete button click
  const handleDeleteBtn = async (orderId) => {
    await axios.delete(`http://localhost:8080/smart-apperal/api/order/deleteOrder/${orderId}`)
      .then((res) => {
        setDeleteOrder(true);
        alert("Delete Successfully");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // Function to handle edit button click
  const handleEditBtn = async (customerId) => {
    await axios.get(`http://localhost:8080/smart-apperal/api/order/order/${orderId}`)
      .then((res) => {
        setOrderId(res.data.orderID);
        setOrderCustomerName(res.data.orderCustomerName);
        setOrderAddress(res.data.orderAddress);
        setOrderEmail(res.data.orderEmail);
        setOrderPhoneNum(res.data.orderPhoneNum);

        setModelView("block");
        setTableView("none");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // Function to handle update button click
  const handleUpdateBtn = async () => {
    if (!orderId || !ordercustomerName || !orderAddress || !orderEmail || !orderPhoneNum) {
      setError("block");
      setTimeout(() => {
        setError("none");
      }, 2000);
    } else {
      const updateData = { orderId, ordercustomerName, orderAddress, orderEmail, orderPhoneNum };
      await axios.put('http://localhost:8080/smart-apperal/api/order/updateorder', updateData)
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
    window.location.href = "/order/orderviewdelete";
  };

  return (
    <div className="addItemContainer">
      <div>
        <Navbar />
      </div>
      <div className="formBodyContainer">
        <Sidebar />
        <div style={{ width: "100%", backgroundColor: "#d7e3fc", height: "100vh" }}>
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
          <div className='updateConatiner' style={{ display: modelView }}>
            <form action="">
              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "5.5rem" }}>Order Id: </label>
                <input type="text" placeholder="Enter Order ID" disabled value={orderId} onChange={(e) => {
                  setOrderId(e.target.value);
                }} />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "3.5rem" }}>Order Customer Name: </label>
                <input type="text" placeholder="Enter Order Customer Name" value={ordercustomerName} onChange={(e) => {
                  setOrderCustomerName(e.target.value);
                }} />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4rem" }}>Order Address: </label>
                <input type="text" placeholder="Enter Order Address" value={orderAddress} onChange={(e) => {
                  setOrderAddress(e.target.value);
                }} />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4.1rem" }}>Order Email: </label>
                <input type="text" placeholder="Enter Order Email" value={orderEmail} onChange={(e) => {
                  setOrderEmail(e.target.value);
                }} />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4.1rem" }}>Order Phone Number: </label>
                <input type="text" placeholder="Enter Order Phone Number" value={orderPhoneNum} onChange={(e) => {
                  setOrderPhoneNum(e.target.value);
                }} />
              </div>
            </form>
            <div className="formButtonSection">
              <button id="backBtn" onClick={handleCloseBtn}>Close</button>
              <button id="addBtn" onClick={handleUpdateBtn}>Update</button>
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
                  <th>Order Address</th>
                  <th>Order Email</th>
                  <th>Order Phone Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.orderID}</td>
                    <td>{data.ordercustomerName}</td>
                    <td>{data.orderAddress}</td>
                    <td>{data.orderEmail}</td>
                    <td>{data.orderPhoneNum}</td>
                    <td>
                      <div className="tableBtn">
                        <button className="editBtn" onClick={() => handleEditBtn(data.orderID)}>Edit</button>
                        <button className="deleteBtn" onClick={() => handleDeleteBtn(data.orderID)}>Delete</button>
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