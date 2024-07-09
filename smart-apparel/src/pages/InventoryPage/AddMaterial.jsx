//Importing necessaray modules and components

//Importing usecase hook from react
import {useState} from "react";
//Importing useNavigate hook from react-router-dom for navigation
import { useNavigate } from "react-router-dom";
// Importing CSS file for styling
import "./AddMaterial.css";
// Importing Sidebar component
import Sidebar from "../../components/Sidebar";
// Importing Navbar component
import Navbar from "../../components/Navbar/Navbar";
// Importing Error component
import Error from "../../components/Error/Error";
// Importing axios for making HTTP requests
import axios from 'axios';
// Importing DatePicker component from react-datepicker library
import DatePicker from "react-datepicker";
// Importing CSS for DatePicker
import "react-datepicker/dist/react-datepicker.css";


// Defining the Add_Material functional component
export default function Add_Material() {
  // State variables for managing form inputs
  const [itemCategory, setItemCategory] = useState(""); // State for item category
  const [itemName, setItemName] = useState(""); // State for item name
  const [stockQty, setStockQty] = useState(0); // State for stock quantity
  const [unit, setUnit] = useState(""); // State for unit of measurement
  const [purchasePrice, setPurchasePrice] = useState(0); // State for purchase price
  const [purchaseDate, setPurchaseDate] = useState(new Date); // State for purchase date


    const[error, setError] = useState("none"); // State for error display
    // const[errorType, setErrorType] = useState("none");
    // const errorMsg = ["All fields are requierd"];

    const navigate = useNavigate();

    //Handle add btn
    const handleAddBtn=async()=>{
      // Check if any field is empty
        if(!itemCategory || !itemName || !stockQty || !unit || !purchasePrice || !purchaseDate){
            setError("block");// Show error message
            // setErrorType(errorMsg[0]);
            setTimeout(()=>{
              setError("none");// Hide error message after 2 seconds
            },2000);
        }
        else{
          // Form data to be sent
          const formData = {itemCategory, itemName, stockQty, unit, purchasePrice, purchaseDate}
          //sends a POST request with the form data to the server to add a new inventory item and shows a success message if the request is successful.
          await axios.post(`http://localhost:8080/smart-apperal/api/inventories/addItem`, formData)
          .then((res)=>{
              alert("Successfully Added")// show success msg
          }).catch((err)=>{
              alert(err.message);// show error msg
          })
        }
    }
    
    //Handlin back button
    const handleBackBtn=()=>{
      navigate("/inventory");
    }
    
    //Handlin Clear button
    const handleClearBtn=()=>{
      window.location.reload();
    }
  return (
    <div className="addItemContainer">
      <div>
      {/* call to navbar component */}
        <Navbar/> 
      </div>
      <div className="formBodyContainer">
        {/* call to sidbar component */}
        <Sidebar/>
        <div style={{width:"100%", backgroundColor:"#d7e3fc"}}>
        
        {/*Title page creation */}
          <h1 style={{color:"black", marginTop:"6rem", marginLeft:"2rem", fontWeight:"bold"}}>Inventory / Add Inventory</h1>
          <Error errorDisplay={error}/>
          <form action="" className="add-material-form">
          <div className="formBox">
            <label htmlFor="" style={{marginRight:"2rem"}}>Item Category: </label>
            <select onChange={(e)=>{
                setItemCategory(e.target.value) // Updating item category state
            }}>
            {/* button options */}
              <option value="" selected>Select Category</option>
              <option value="clothMaterial">Cloth Material</option>
              <option value="button">Button</option>
              <option value="zipper">Zipper</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="formBox">
            {/* Label for item name */}
            <label htmlFor="" style={{marginRight:"3.5rem"}}>Item Name: </label>
            <input type="text" placeholder="Enter Item Name" onChange={(e)=>{
                setItemName(e.target.value) // Updating item name state
            }}/>
          </div>
          <div className="formBox">
            {/* Label for stock quantity */}
            <label htmlFor="" style={{marginRight:"4rem"}}>Stock Qty: </label>
            <input type="text" placeholder="Enter Qty" onChange={(e)=>{
                setStockQty(e.target.value)// Updating stock quantity state
            }}/>
          </div>
          {/* Label for unit */}
          <div className="formBox">
            <label htmlFor="" style={{marginRight:"6.8rem"}}>Unit: </label>
            <select onChange={(e)=>{
                setUnit(e.target.value)// Updating unit state
            }}>
              {/* options for unit selection */}
              <option value="" selected>Select Unit</option>
              <option value="meter">Meters</option>
              <option value="pcs">Pieces</option>
              <option value="liter">Liters</option>
              <option value="bottle">Bottles</option>
            </select>
          </div>
          <div className="formBox">
             {/* Label for unit price */}
            <label htmlFor="" style={{marginRight:"4.1rem"}}>Unit Price: </label>
            <input type="text" placeholder="Enter Unit Price" onChange={(e)=>{
                setPurchasePrice(e.target.value)// Updating purchase price state
            }}/>
          </div>
          <div className="formBox">
            <label htmlFor="" style={{marginRight:"6.6rem"}}>Date: </label> {/* Label for date */}
            {/* Date picker component */}
            <DatePicker selected={purchaseDate} onChange={(date)=>setPurchaseDate(date)} placeholderText='Select Date'/>
          </div>
        </form>
        <div className="formButtonSection">
          {/* alternative buttons */}
          <button id="backBtn" onClick={handleBackBtn}>Back</button>
          <button id="clearBtn" onClick={handleClearBtn}>Clear</button>
          <button id="addBtn" onClick={handleAddBtn}>Add</button>
        </div>
        </div>
      </div>
      
    </div>
  );
}