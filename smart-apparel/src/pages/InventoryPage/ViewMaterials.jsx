import React from "react";
import "./ViewMaterials.css";
import Error from "../../components/Error/Error";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ViewMaterials() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/smart-apperal/api/inventories/items`)
      .then((res) => {
        setTableData(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
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
            Inventory / View Inventory
          </h1>
          <Error errorDisplay="none" />
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Item Category</th>
                  <th>Item Name</th>
                  <th>Stock Qty</th>
                  <th>Units</th>
                  <th>Unit Price(Rs)</th>
                  <th>Purchase Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.itemCategory}</td>
                    <td>{data.itemName}</td>
                    <td>{data.stockQty}</td>
                    <td>{data.unit}</td>
                    <td>{data.purchasePrice}</td>
                    <td>{data.purchaseDate}</td>
                    <td>
                      <div className="tableBtn">
                        <button className="editBtn">Edit</button>
                        <button className="deleteBtn">Delete</button>
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
