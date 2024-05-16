import React, { useState, useEffect } from "react";
import "./CustomerDetails.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Error1 from "../../components/Error1/Error1";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";

export default function CustomerDetails() {
  // State variables
  const [tableData, setTableData] = useState([]);
  const [deleteCustomer, setDeleteCustomer] = useState(false);

  const [modelView, setModelView] = useState("none");
  const [tableView, setTableView] = useState("block");

  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerCompanyName, setCustomerCompanyName] = useState("");
  const [customerReference, setCustomerReference] = useState("");
  const [customerPhoneNum, setCustomerPhoneNum] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");

  const [error, setError] = useState("none");

  // Fetch customer data from the server on component mount and whenever deleteCustomer changes
  useEffect(() => {
    axios
      .get("http://localhost:8080/customer/customer")
      .then((res) => {
        setTableData(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [deleteCustomer]);

  // Function to handle delete button click
  const handleDeleteBtn = async (customerId) => {
    await axios
      .delete(
        `http://localhost:8080/smart-apperal/api/customer/deleteCustomer/${customerId}`
      )
      .then((res) => {
        setDeleteCustomer(true);
        alert("Delete Successfully");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // Function to handle edit button click
  const handleEditBtn = async (customerId) => {
    await axios
      .get(
        `http://localhost:8080/smart-apperal/api/customer/customer/${customerId}`
      )
      .then((res) => {
        setCustomerId(res.data.customerID);
        setCustomerName(res.data.customerName);
        setCustomerAddress(res.data.customerAddress);
        setCustomerEmail(res.data.customerEmail);
        setCustomerCompanyName(res.data.customerCompanyName);
        setCustomerReference(res.data.customerReference);
        setCustomerPhoneNum(res.data.customerPhoneNum);
        setCustomerPassword(res.data.customerPassword);

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
    // Validate form input fields
    if (
      !customerId ||
      !customerName ||
      !customerAddress ||
      !customerEmail ||
      !customerCompanyName ||
      !customerReference ||
      !customerPhoneNum ||
      !customerPassword
    ) {
      setError("block");
      setTimeout(() => {
        setError("none");
      }, 2000);
    } else {
      // Prepare update data
      const updateData = {
        customerId,
        customerName,
        customerAddress,
        customerEmail,
        customerCompanyName,
        customerReference,
        customerPhoneNum,
        customerPassword,
      };
      // Send update request to the server
      await axios
        .put(
          "http://localhost:8080/smart-apperal/api/customer/updatecustomer",
          updateData
        )
        .then((res) => {
          window.location.href = "/customer/customerviewdelete";
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  // Function to handle close button click
  const handleCloseBtn = () => {
    window.location.href = "/customer/customerviewdelete";
  };

  // Rendering
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
            Customer Details
          </h1>
          {/* Error component */}
          <Error1 errorDisplay={error} />
          <div className="updateConatiner" style={{ display: modelView }}>
            <form action="">
              {/* Form input fields */}
              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "5.5rem" }}>
                  Customer Id:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Customer ID"
                  disabled
                  value={customerId}
                  onChange={(e) => {
                    setCustomerId(e.target.value);
                  }}
                />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "3.5rem" }}>
                  Customer Name:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Customer Name"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                  }}
                />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4rem" }}>
                  Customer Address:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Customer Address"
                  value={customerAddress}
                  onChange={(e) => {
                    setCustomerAddress(e.target.value);
                  }}
                />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4.1rem" }}>
                  Customer Email:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Customer Email"
                  value={customerEmail}
                  onChange={(e) => {
                    setCustomerEmail(e.target.value);
                  }}
                />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4rem" }}>
                  Customer Company Name:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Customer Company Name"
                  value={customerCompanyName}
                  onChange={(e) => {
                    setCustomerCompanyName(e.target.value);
                  }}
                />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4.1rem" }}>
                  Customer Reference:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Customer Reference"
                  value={customerReference}
                  onChange={(e) => {
                    setCustomerReference(e.target.value);
                  }}
                />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4.1rem" }}>
                  Customer Phone Number:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Customer Phone Number"
                  value={customerPhoneNum}
                  onChange={(e) => {
                    setCustomerPhoneNum(e.target.value);
                  }}
                />
              </div>

              <div className="formBox">
                <label htmlFor="" style={{ marginRight: "4rem" }}>
                  Customer Password:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Customer Password"
                  value={customerPassword}
                  onChange={(e) => {
                    setCustomerPassword(e.target.value);
                  }}
                />
              </div>
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
                  <th>Customer Id</th>
                  <th>Customer Name</th>
                  <th>Customer Address</th>
                  <th>Customer Email</th>
                  <th>Customer Company Name</th>
                  <th>Customer Reference</th>
                  <th>Customer Phone Number</th>
                  <th>Customer Password</th>

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
                    <td>{data.customerCompanyName}</td>
                    <td>{data.customerReference}</td>
                    <td>{data.customerPhoneNum}</td>
                    <td>{data.customerPassword}</td>

                    <td>
                      <div className="tableBtn">
                        <button
                          className="editBtn"
                          onClick={() => handleEditBtn(data.customerID)}
                        >
                          Edit
                        </button>
                        <button
                          className="deleteBtn"
                          onClick={() => handleDeleteBtn(data.customerID)}
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
