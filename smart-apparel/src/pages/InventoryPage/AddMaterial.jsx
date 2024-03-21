import {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./AddMaterial.css";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Error from "../../components/Error/Error";
import axios from 'axios';

export default function Add_Material() {
    const[itemCategory,setItemCategory] = useState("");
    const[itemName,setItemName] = useState("");
    const[stockQty,setStockQty] = useState(0);
    const[unit,setUnit] = useState("");
    const[purchasePrice,setPurchasePrice] = useState(0);
    const[purchaseDate,setPurchaseDate] = useState("");

    const[error, setError] = useState("none");
    const[errorType, setErrorType] = useState("none");
    const errorMsg = ["All fields are requierd"];

    const navigate = useNavigate();

    //Handle add btn
    const handleAddBtn=async()=>{
        if(!itemCategory || !itemName, !stockQty, !unit, !purchasePrice, !purchaseDate){
            setError("block");
            setErrorType(errorMsg[0]);
            setTimeout(()=>{
              setError("none");
            },2000);
        }
        else{
          const formData = {itemCategory, itemName, stockQty, unit, purchasePrice, purchaseDate}
          await axios.post(`http://localhost:8080/smart-apperal/api/inventories/addItem`, formData)
          .then((res)=>{
              alert("Successfully Added")
          }).catch((err)=>{
              alert(err.message);
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
        <Navbar/>
      </div>
      <div className="formBodyContainer">
        <Sidebar/>
        <div style={{width:"100%", backgroundColor:"#d7e3fc"}}>
        
          <h1 style={{color:"black", marginTop:"6rem", marginLeft:"2rem", fontWeight:"bold"}}>Inventory / Add Inventory</h1>
          <Error errorDisplay={error}/>
          <form action="">
          <div className="formBox">
            <label htmlFor="" style={{marginRight:"2rem"}}>Item Category: </label>
            <select onChange={(e)=>{
                setItemCategory(e.target.value)
            }}>
              <option value="" selected>Select Category</option>
              <option value="clothMaterial">Cloth Material</option>
              <option value="button">Button</option>
              <option value="zipper">Zipper</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="formBox">
            <label htmlFor="" style={{marginRight:"3.5rem"}}>Item Name: </label>
            <input type="text" placeholder="Enter Item Name" onChange={(e)=>{
                setItemName(e.target.value)
            }}/>
          </div>
          <div className="formBox">
            <label htmlFor="" style={{marginRight:"4rem"}}>Stock Qty: </label>
            <input type="text" placeholder="Enter Qty" onChange={(e)=>{
                setStockQty(e.target.value)
            }}/>
          </div>
          <div className="formBox">
            <label htmlFor="" style={{marginRight:"6.8rem"}}>Unit: </label>
            <select onChange={(e)=>{
                setUnit(e.target.value)
            }}>
              <option value="" selected>Select Unit</option>
              <option value="meter">Meters</option>
              <option value="pcs">Pieces</option>
              <option value="liter">Liters</option>
              <option value="bottle">Bottles</option>
            </select>
          </div>
          <div className="formBox">
            <label htmlFor="" style={{marginRight:"4.1rem"}}>Unit Price: </label>
            <input type="text" placeholder="Enter Unit Price" onChange={(e)=>{
                setPurchasePrice(e.target.value)
            }}/>
          </div>
          <div className="formBox">
            <label htmlFor="" style={{marginRight:"6.6rem"}}>Date: </label>
            <input type="text" placeholder="2xxx/xx/xx" onChange={(e)=>{
                setPurchaseDate(e.target.value)
            }}/>
          </div>
        </form>
        <div className="formButtonSection">
          <button id="backBtn" onClick={handleBackBtn}>Back</button>
          <button id="clearBtn" onClick={handleClearBtn}>Clear</button>
          <button id="addBtn" onClick={handleAddBtn}>Add</button>
        </div>
        </div>
      </div>
      
    </div>
  );
}