import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerRegister.css';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Error from '../../components/Error1/Error1';
import axios from 'axios';

export default function CustomerRegister() {
    const[CustomerId,setCustomerId] = useState("");
    const[CustomerName,setCustomerName] = useState("");
    const[CustomerAddress,setCustomerAddress] = useState(0);
    const[CustomerEmail,setCustomerEmail] = useState(0);
    const[CustomerPhoneNum,setCustomerPhoneNum] = useState("");

    const[error, setError] = useState("none");
    const[errorType, setErrorType] = useState("none");
    const errorMsg = ["All fields are requierd"];

    const navigate = useNavigate();

    const handleAddBtn = async () => {
        if (!CustomerId || !CustomerName || !CustomerAddress || !CustomerEmail || !CustomerPhoneNum) {
            setError("block");
            setErrorType(errorMsg[0]);
            setTimeout(() => {
            setError("none");
          }, 2000);
        } else {
            const formData = { CustomerId, CustomerName, CustomerAddress, CustomerEmail, CustomerPhoneNum };
            await axios.post("http://localhost:8080/smart-apperal/api/customer/customerregister", formData)
            .then((res) => {
                alert("Successfully Registered");
            }).catch((err) => {
                alert(err.message);
            });
          }
    }

    const handleBackBtn=()=>{
      navigate("/customer");
    }
    
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
            <h1 style={{color:"black", marginTop:"6rem", marginLeft:"2rem", fontWeight:"bold"}}>
              Customer Register
            </h1>
            <Error errorDisplay={error}/>
            <form action="">
          
            <div className="formBox">
              <label htmlFor="" style={{marginRight:"3.5rem"}}>Customer ID: </label>
              <input type="text" placeholder="Enter Customer Id" onChange={(e)=>{
                setCustomerId(e.target.value);
            }}/>
          </div>
          <div className="formBox">
            <label htmlFor="" style={{marginRight:"4rem"}}>Customer Name: </label>
            <input type="text" placeholder="Enter Customer Name" onChange={(e)=>{
                setCustomerName(e.target.value);
            }}/>
          </div>
          <div className="formBox">
            <label htmlFor="" style={{marginRight:"4rem"}}>Customer Address: </label>
            <input type="text" placeholder="Enter Customer Address" onChange={(e)=>{
                setCustomerAddress(e.target.value);
            }}/>
          </div>
          <div className="formBox">
            <label htmlFor="" style={{marginRight:"4.1rem"}}>Customer Email: </label>
            <input type="text" placeholder="Enter Customer Email" onChange={(e)=>{
                setCustomerEmail(e.target.value);
            }}/>
          </div>
          <div className="formBox">
            <label htmlFor="" style={{marginRight:"6.6rem"}}>Customer Phone Number: </label>
            <input type="text" placeholder="Enter Customer Phone Number" onChange={(e)=>{
                setCustomerPhoneNum(e.target.value);
            }}/>
          </div>
        </form>
        <div className="formButtonSection">
          <button id="backBtn" onClick={handleBackBtn}>Back</button>
          <button id="clearBtn" onClick={handleClearBtn}>Clear</button>
          <button id="addBtn" onClick={handleAddBtn}>Register</button>
        </div>
        </div>
      </div>
      

  //   </div>
  );
}

// import {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CustomerRegister.css';
// import Sidebar from '../../components/Sidebar';
// import Navbar from '../../components/Navbar/Navbar';
// import Error from '../../components/Error/Error';
// import axios from 'axios';

//      </div>
//    );
//  }
