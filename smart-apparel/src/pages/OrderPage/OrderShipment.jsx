// import React, { useState } from "react";
// import axios from "axios";
// import Navbar from "../../components/Navbar/Navbar";
// import Sidebar from "../../components/Sidebar";
// import Error1 from "../../components/Error1/ErrorShipping";
// import Error2 from "../../components/Error1/Error2";
// import "./OrderShipment.css";

// function OrderShipment() {
//   const [orderId, setOrderId] = useState("");
//   const [isShipped, setIsShipped] = useState(false);
//   const [error1, setError1] = useState(null);
//   const [orderDetails, setOrderDetails] = useState(null);
//   const [error2, setError2] = useState(null);

//   const errorMsg1 = "Order is not yet shipped or Invalid OrderId";
//   const errorMsg2 = "Please check again.Something went wrong";

//   const fetchOrderStatus = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/order/checkShipped/${orderId}`
//       );
//       if (response.data.content === true) {
//         setIsShipped(true);
//         setError1(null);
//       } else {
//         setIsShipped(false);
//         setError1(errorMsg1);
//       }
//     } catch (error) {
//       setIsShipped(false);
//       setError1(errorMsg1);
//     }
//   };

//   const generateBill = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/order/generateBill/${orderId}`
//       );
//       setOrderDetails(response.data.content);
//       setError2(errorMsg2);
//     } catch (error) {
//       setOrderDetails(null);
//       setError2(error.response ? error.response.data : errorMsg2);
//     }
//   };
//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>
//       <div className="formBodyContainer">
//         <Sidebar />
//         <div
//           style={{ width: "100%", backgroundColor: "#d7e3fc", height: "100vh" }}
//         >
//           <h1
//             style={{
//               color: "black",
//               marginTop: "6rem",
//               marginLeft: "2rem",
//               fontWeight: "bold",
//             }}
//           >
//             Order Shipment
//           </h1>
//           <div>
//             {error1 && <Error1 errorDisplay="block" errorMessage={error1} />}
//             {error2 && <Error2 errorDisplay="block" errorMessage={error2} />}
//             <div className="App">
//               <form onSubmit={fetchOrderStatus}>
//                 <input
//                   type="text"
//                   value={orderId}
//                   onChange={(e) => setOrderId(e.target.value)}
//                   placeholder="Enter Order ID"
//                 />
//                 <button id="searchBtn" type="submit">
//                   Search
//                 </button>
//               </form>
//               <button id="billBtn" onClick={generateBill} disabled={!isShipped}>
//                 Generate Bill
//               </button>
//               {orderDetails && (
//                 <div>
//                   <h3>Order Details</h3>
//                   <p>Order ID: {orderDetails.order.id}</p>
//                   <p>Small Size: {orderDetails.order.smallSize}</p>
//                   <p>Medium Size: {orderDetails.order.mediumSize}</p>
//                   <p>Large Size: {orderDetails.order.largeSize}</p>
//                   <p>Agreed Price: ${orderDetails.order.agreedPrice}</p>
//                   <p>
//                     <strong>Total Amount: ${orderDetails.totalAmount}</strong>
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderShipment;

import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Error1 from "../../components/Error1/ErrorShipping";
import Error2 from "../../components/Error1/Error2";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./OrderShipment.css";

function OrderShipment() {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState("");
  const [isShipped, setIsShipped] = useState(false);
  const [error1, setError1] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [error2, setError2] = useState(null);

  const errorMsg1 = "Order is not yet shipped or Invalid OrderId";
  const errorMsg2 = "Please check again. Something went wrong";

  const fetchOrderStatus = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/order/checkShipped/${orderId}`
      );
      if (response.data.content === true) {
        setIsShipped(true);
        setError1(null);
      } else {
        setIsShipped(false);
        setError1(errorMsg1);
      }
    } catch (error) {
      setIsShipped(false);
      setError1(errorMsg1);
    }
  };

  const generateBill = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/order/generateBill/${orderId}`
      );
      setOrderDetails(response.data.content);
      setError2(null);
    } catch (error) {
      setOrderDetails(null);
      setError2(error.response ? error.response.data : errorMsg2);
    }
  };

  const downloadReport = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/order/downloadReport/${orderId}`,
        { responseType: "blob" }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `order_report_${orderId}.txt`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading the report", error);
    }
  };

  return (
    <div>
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
            Order Shipment
            <Button onClick={() => { navigate('/orders') }}> <ArrowBackIosNewIcon/> </Button>
          </h1>
          <div>
            {error1 && <Error1 errorDisplay="block" errorMessage={error1} />}
            {error2 && <Error2 errorDisplay="block" errorMessage={error2} />}
            <div className="App">
              <form onSubmit={fetchOrderStatus}>
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Enter Order ID"
                />
                <button id="searchBtn" type="submit">
                  Search
                </button>
              </form>
              <button id="billBtn" onClick={generateBill} disabled={!isShipped}>
                Generate Bill
              </button>
              {orderDetails && (
                <div>
                  <h3>Order Details</h3>
                  <p>Order Id: {orderDetails.order.OrderId}</p>
                  <p>Order Customer Name: {orderDetails.order.orderCustomerName}</p>
                  <p>Model Name: {orderDetails.order.modelName}</p>
                  <p>Small Size: {orderDetails.order.smallSize}</p>
                  <p>Medium Size: {orderDetails.order.mediumSize}</p>
                  <p>Large Size: {orderDetails.order.largeSize}</p>
                  <p>Order Agreed Price: ${orderDetails.order.orderAgreedPrice}</p>
                  <p>Cloth Material: {orderDetails.order.clothMaterial}</p>
                  <p>Order Status: {orderDetails.order.orderStatus}</p>
                  <p>Order Covered Amount: {orderDetails.order.orderCoveredAmount}</p>
                  <p>
                    <strong>Total Amount: Rs.{orderDetails.totalAmount}</strong>
                  </p>
                  <button id="downloadBtn" onClick={downloadReport}>
                    Download Report
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderShipment;

