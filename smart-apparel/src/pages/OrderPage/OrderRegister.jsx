import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderRegister.css';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Error from '../../components/Error1/Error1';
import axios from 'axios';

export default function OrderRegister() {
    // State variables
    const [orderId, setOrderId] = useState("");
    const [orderCustomerName, setOrderCustomerName] = useState("");
    const [orderAgreedPrice, setOrderAgreedPrice] = useState("");
    const [orderSize, setOrderSize] = useState("");
    const [orderAmount, setOrderAmount] = useState("");

    const [error, setError] = useState("none");
    const [errorType, setErrorType] = useState("none");
    const errorMsg = ["All fields are required"];

    // Navigate between routes
    const navigate = useNavigate();

    // Function to handle the Add button click
    const handleAddBtn = async () => {
        if (!orderId || !orderCustomerName || !orderAgreedPrice || !orderSize || !orderAmount) {
            setError("block");
            setErrorType(errorMsg[0]);
            setTimeout(() => {
                setError("none");
            }, 2000);
        } else {
            const formData = { orderId,orderCustomerName,orderAgreedPrice,orderSize,orderAmount };
            await axios.post("http://localhost:8080/smart-apperal/api/order/orderregister", formData)
                .then((res) => {
                    alert("Successfully Registered");
                }).catch((err) => {
                    alert(err.message);
                });
        }
    }

    // Function to handle the Back button click
    const handleBackBtn = () => {
        navigate("/orders");
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
                        Order Register
                    </h1>
                    <Error errorDisplay={error} />
                    <form action="">

                        {/* Form input fields */}
                        <div className="formBox">
                            <label htmlFor="" style={{ marginRight: "3.5rem" }}>Order ID: </label>
                            <input type="text" placeholder="Enter Order Id" onChange={(e) => {
                                setOrderId(e.target.value);
                            }} />
                        </div>
                        <div className="formBox">
                            <label htmlFor="" style={{ marginRight: "4rem" }}>Order Customer Name: </label>
                            <input type="text" placeholder="Enter Order Customer Name" onChange={(e) => {
                                setOrderCustomerName(e.target.value);
                            }} />
                        </div>
                        <div className="formBox">
                            <label htmlFor="" style={{ marginRight: "4rem" }}>Order Agreed Price: </label>
                            <input type="text" placeholder="Enter Order Agreed Price" onChange={(e) => {
                                setOrderAgreedPrice(e.target.value);
                            }} />
                        </div>
                        <div className="formBox">
                            <label htmlFor="" style={{ marginRight: "4.1rem" }}>Order Size: </label>
                            <input type="text" placeholder="Enter Order Size" onChange={(e) => {
                                setOrderSize(e.target.value);
                            }} />
                        </div>
                        <div className="formBox">
                            <label htmlFor="" style={{ marginRight: "6.6rem" }}>Order Amount: </label>
                            <input type="text" placeholder="Enter Order Amount" onChange={(e) => {
                                setOrderAmount(e.target.value);
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
