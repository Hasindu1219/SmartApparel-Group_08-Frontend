import React from "react";
import "./ViewMaterials.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Error from "../../components/Error/Error";


export default function ViewMaterials() {
  const [tableData, setTableData] = useState([]);
  const[deleteItem, setDeleteItem] = useState(false);

  const[modelView, setModelView] = useState("none");
  const[tableView, setTableView] = useState("block");

    const[itemID,setItemID] = useState(0);
    const[itemCategory,setItemCategory] = useState("");
    const[itemName,setItemName] = useState("");
    const[stockQty,setStockQty] = useState(0);
    const[unit,setUnit] = useState("");
    const[purchasePrice,setPurchasePrice] = useState(0);
    const[purchaseDate,setPurchaseDate] = useState("");

    const[error, setError] = useState("none");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/smart-apperal/api/inventories/items`)
      .then((res) => {
        console.log(res.data);
        setTableData(res.data);
        
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [deleteItem]);

  //Handling delete
  const handleDeleteBtn=async(itemID)=>{
    await axios.delete(`http://localhost:8080/smart-apperal/api/inventories/deleteItem/${itemID}`)
    .then((res)=>{
      setDeleteItem(true);
      alert("Delete Successfully")
    }).catch((err)=>{
      alert(err.message);
    })    
  }

  //HandleEditing
  const handleEditBtn=async(itemID)=>{
      await axios.get(`http://localhost:8080/smart-apperal/api/inventories/item/${itemID}`)
      .then((res)=>{
        // setEdidtingItemData(res.data);
        setItemID(res.data.itemID)
        setItemCategory(res.data.itemCategory)
        setItemName(res.data.itemName)
        setStockQty(res.data.stockQty)
        setUnit(res.data.unit)
        setPurchasePrice(res.data.purchasePrice)
        setPurchaseDate(res.data.purchaseDate)

        setModelView("block");
        setTableView("none")
      }).catch((err)=>{
        alert(err.message);
      })
  }
  const handleUpdateBtn = async () => {
    if(!itemCategory || !itemName || !stockQty || !unit || !purchasePrice || !purchaseDate){
      setError("block");
      setTimeout(()=>{
        setError("none");
      },2000);
  }else{
    const updateData = {itemID,itemCategory,itemName,stockQty,unit,purchasePrice,purchaseDate
    };
    await axios.put(`http://localhost:8080/smart-apperal/api/inventories/updateItem`, updateData)
        .then((res) => {
          window.location.href = "/inventory/viewInventory";
        }).catch((err) => {
            alert(err.message);
        });
  }
    
};

// Handle close Btn
const handleCloseBtn = () => {
    window.location.href = "/inventory/viewInventory";
};
  return (
    <div className="addItemContainer">
      <div>
        <Navbar />
      </div>
      <div className="formBodyContainer">
        <Sidebar />
        <div style={{ width: "100%", backgroundColor: "#d7e3fc", height:"100vh"}}>
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
          <Error errorDisplay={error}/>
          <div className='updateConatiner' style={{ display: modelView }}>
            <form action="">
                <div className="formBox">
                    <label htmlFor="" style={{ marginRight: "5.5rem" }}>Item ID: </label>
                    <input type="text" placeholder="Enter Item ID" disabled value={itemID} onChange={(e) => {
                        setItemID(e.target.value);
                    }} />
                </div>
                <div className="formBox">
                    <label htmlFor="" style={{ marginRight: "2rem" }}>Item Category: </label>
                    <select value={itemCategory} onChange={(e) => {
                        setItemCategory(e.target.value);
                    }}>
                        <option value="" disabled>Select Category</option>
                        <option value="clothMaterial">Cloth Material</option>
                        <option value="button">Button</option>
                        <option value="zipper">Zipper</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="formBox">
                    <label htmlFor="" style={{ marginRight: "3.5rem" }}>Item Name: </label>
                    <input type="text" placeholder="Enter Item Name" value={itemName} onChange={(e) => {
                        setItemName(e.target.value);
                    }} />
                </div>
                <div className="formBox">
                    <label htmlFor="" style={{ marginRight: "4rem" }}>Stock Qty: </label>
                    <input type="text" placeholder="Enter Qty" value={stockQty} onChange={(e) => {
                        setStockQty(e.target.value);
                    }} />
                </div>
                <div className="formBox">
                    <label htmlFor="" style={{ marginRight: "6.8rem" }}>Unit: </label>
                    <select value={unit} onChange={(e) => {
                        setUnit(e.target.value);
                    }}>
                        <option value="" disabled>Select Unit</option>
                        <option value="meter">Meters</option>
                        <option value="pcs">Pieces</option>
                        <option value="liter">Liters</option>
                        <option value="bottle">Bottles</option>
                    </select>
                </div>
                <div className="formBox">
                    <label htmlFor="" style={{ marginRight: "4.1rem" }}>Unit Price: </label>
                    <input type="text" placeholder="Enter Unit Price" value={purchasePrice} onChange={(e) => {
                        setPurchasePrice(e.target.value);
                    }} />
                </div>
                <div className="formBox">
                    <label htmlFor="" style={{ marginRight: "6.6rem" }}>Date: </label>
                    <DatePicker selected={purchaseDate} onChange={(date)=>setPurchaseDate(date)} placeholderText='Select Date'/>
                </div>
            </form>
            <div className="formButtonSection">
                <button id="backBtn" onClick={handleCloseBtn}>Close</button>
                <button id="addBtn" onClick={handleUpdateBtn}>Update</button>
            </div>
        </div>
          {/* -------------------------------------------------------------------------------------------------- */}
          <div className="table-container"  style={{display:tableView}}>
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
                        <button className="editBtn" onClick={()=>handleEditBtn(data.itemID)}>Edit</button>
                        <button className="deleteBtn" onClick={()=>handleDeleteBtn(data.itemID)}>Delete</button>
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