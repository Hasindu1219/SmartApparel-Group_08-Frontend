import React, { useState, useEffect } from 'react';
import './CustomerDetails.css';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import Error1 from '../../components/Error1/Error1';
import axios from 'axios';

export default function CustomerDetails() {
  const [tableData, setTableData] = useState([]);
  const [deleteCustomer, setDeleteCustomer] = useState(false);

  const [modelView, setModelView] = useState("none");
  const [tableView, setTableView] = useState("block");

  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhoneNum, setCustomerPhoneNum] = useState("");

  const [error, setError] = useState("none");

  useEffect(() => {
    axios
      .get('http://localhost:8080/smart-apperal/api/customer/customer')
      .then((res) => {
        setTableData(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [deleteCustomer]);

  const handleDeleteBtn = async (customerId) => {
    await axios.delete(`http://localhost:8080/smart-apperal/api/customer/deleteCustomer/${customerId}`)
      .then((res) => {
        setDeleteCustomer(true);
        alert("Delete Successfully");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleEditBtn = async (customerId) => {
    await axios.get(`http://localhost:8080/smart-apperal/api/customer/customer/${customerId}`)
      .then((res) => {
        setCustomerId(res.data.customerID);
        setCustomerName(res.data.customerName);
        setCustomerAddress(res.data.customerAddress);
        setCustomerEmail(res.data.customerEmail);
        setCustomerPhoneNum(res.data.customerPhoneNum);

        setModelView("block");
        setTableView("none");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleUpdateBtn = async () => {
    if (!customerId || !customerName || !customerAddress || !customerEmail || !customerPhoneNum) {
      setError("block");
      setTimeout(() => {
        setError("none");
      }, 2000);
    } else {
      const updateData = { customerId, customerName, customerAddress, customerEmail, customerPhoneNum };
      await axios.put('http://localhost:8080/smart-apperal/api/customer/updatecustomer', updateData)
        .then((res) => {
          window.location.href = "/customer/customerviewdelete";
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const handleCloseBtn = () => {
    window.location.href = "/customer/customerviewdelete";
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
            Customer Details
          </h1>
          <Error1 errorDisplay={error} />
          <div className='updateConatiner' style={{ display: modelView }}>
            <form action="">
              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "5.5rem" }}>Customer Id: </label>
                <input type="text" placeholder="Enter Customer ID" disabled value={customerId} onChange={(e) => {
                  setCustomerId(e.target.value);
                }} />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "3.5rem" }}>Customer Name: </label>
                <input type="text" placeholder="Enter Customer Name" value={customerName} onChange={(e) => {
                  setCustomerName(e.target.value);
                }} />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4rem" }}>Customer Address: </label>
                <input type="text" placeholder="Enter Customer Address" value={customerAddress} onChange={(e) => {
                  setCustomerAddress(e.target.value);
                }} />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4.1rem" }}>Customer Email: </label>
                <input type="text" placeholder="Enter Customer Email" value={customerEmail} onChange={(e) => {
                  setCustomerEmail(e.target.value);
                }} />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4.1rem" }}>Customer Phone Number: </label>
                <input type="text" placeholder="Enter Customer Phone Number" value={customerPhoneNum} onChange={(e) => {
                  setCustomerPhoneNum(e.target.value);
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
            <table className="customer-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Customer Id</th>
                  <th>Customer Name</th>
                  <th>Customer Address</th>
                  <th>Customer Email</th>
                  <th>Customer Phone Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.customerID}</td>
                    <td>{data.customerName}</td>
                    <td>{data.customerAddress}</td>
                    <td>{data.customerEmail}</td>
                    <td>{data.customerPhoneNum}</td>
                    <td>
                      <div className="tableBtn">
                        <button className="editBtn" onClick={() => handleEditBtn(data.customerID)}>Edit</button>
                        <button className="deleteBtn" onClick={() => handleDeleteBtn(data.customerID)}>Delete</button>
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