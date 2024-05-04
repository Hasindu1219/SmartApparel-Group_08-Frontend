import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerRegister.css';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Error from '../../components/Error1/Error1';
import axios from 'axios';

export default function CustomerRegister() {
    // State variables
    const [customerId, setCustomerId] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerAddress, setCustomerAddress] = useState(0);
    const [customerEmail, setCustomerEmail] = useState(0);
    const [customerCompanyName, setCustomerCompanyName] = useState(0);
    const [customerReference, setCustomerReference] = useState(0);
    const [customerPhoneNum, setCustomerPhoneNum] = useState("");
    const [customerPassword, setCustomerPassword] = useState(0);
   

    const [error, setError] = useState("none");
    const [errorType, setErrorType] = useState("none");
    const errorMsg = ["All fields are required"];

    // Navigate between routes
    const navigate = useNavigate();

    // Function to handle the Add button click
    const handleAddBtn = async () => {
        if (!customerId || !customerName || !customerAddress || !customerEmail || !customerCompanyName || !customerReference || !customerPhoneNum || !customerPassword) {
            setError("block");
            setErrorType(errorMsg[0]);
            setTimeout(() => {
                setError("none");
            }, 2000);
        } else {
            const formData = {customerId,customerName,customerAddress,customerEmail,customerCompanyName,customerReference,customerPhoneNum,customerPassword};
            await axios.post("http://localhost:8080/smart-apperal/api/customer/customerregister", formData)
                .then((res) => {
                    alert("Successfully Registered");
                }).catch((err) => {
                    alert(err.message);
                });
        }
    }

    // Function to handle the Back button click
    const handleBackBtn = () => {
        navigate("/customer");
    }

    // Function to handle the Clear button click
    const handleClearBtn = () => {
        window.location.reload();
    }

    return (
        <div className="addItemContainer">
            <div>
                <Navbar />
            </div>
            <div className="formBodyContainer">
                <Sidebar />
                <div style={{ width: "100%", backgroundColor: "#d7e3fc" }}>
                    <h1 style={{ color: "black", marginTop: "6rem", marginLeft: "2rem", fontWeight: "bold" }}>
                        Customer Register
                    </h1>
                    <Error errorDisplay={error} />
                    <form action="">


                        {/* Form input fields */}
                        <div className="formBox">
                            <label htmlFor="" style={{ marginRight: "3.5rem" }}>Customer ID: </label>
                            <input type="number" placeholder="Enter Customer Id" onChange={(e) => {
                                setCustomerId(e.target.value);
                            }} />
                        </div>
                        <div className="formBox">
                            <label htmlFor="" style={{ marginRight: "4rem" }}>Customer Name: </label>
                            <input type="text" placeholder="Enter Customer Name" onChange={(e) => {
                                setCustomerName(e.target.value);
                            }} />
                        </div>
                        <div className="formBox">
                            <label htmlFor="" style={{ marginRight: "4rem" }}>Customer Address: </label>
                            <input type="text" placeholder="Enter Customer Address" onChange={(e) => {
                                setCustomerAddress(e.target.value);
                            }} />
                        </div>
                        <div className="formBox">
                            <label htmlFor="" style={{ marginRight: "4.1rem" }}>Customer Email: </label>
                            <input type="text" placeholder="Enter Customer Email" onChange={(e) => {
                                setCustomerEmail(e.target.value);
                            }} />
                        </div>
                        <div className="formBox">
                            <label htmlFor="" style={{ marginRight: "4rem" }}>Customer Company Name: </label>
                            <input type="text" placeholder="Enter Customer Company Name" onChange={(e) => {
                                setCustomerCompanyName(e.target.value);
                            }} />
                        </div>
                        <div className="formBox">
                            <label htmlFor="" style={{ marginRight: "4.1rem" }}>Customer Reference: </label>
                            <input type="text" placeholder="Enter Customer Reference" onChange={(e) => {
                                setCustomerReference(e.target.value);
                            }} />
                        </div>
                        <div className="formBox">
                            <label htmlFor="" style={{ marginRight: "6.6rem" }}>Customer Phone Number: </label>
                            <input type="number" placeholder="Enter Customer Phone Number" onChange={(e) => {
                                setCustomerPhoneNum(e.target.value);
                            }} />
                        </div>
                        <div className="formBox">
                            <label htmlFor="" style={{ marginRight: "4rem" }}>Customer Password: </label>
                            <input type="text" placeholder="Enter Customer Address" onChange={(e) => {
                                setCustomerPassword(e.target.value);
                            }} />
                        </div>
                        
                    </form>
                    {/* Form action buttons */}
                    <div className="formButtonSection">
                        <button id="backBtn" onClick={handleBackBtn}>Back</button>
                        <button id="clearBtn" onClick={handleClearBtn}>Clear</button>
                        <button id="addBtn" onClick={handleAddBtn}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
