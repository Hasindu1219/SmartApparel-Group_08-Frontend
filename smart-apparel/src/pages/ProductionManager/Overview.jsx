import React, { useState, useEffect } from "react";
import Sidebar from "../../components/ProductionManager/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../../components/ProductionManager/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import CardModel from "../../components/Card";


//function for set values to the cards
export default function Overview() {

  // State variables to hold total values
  const [totalExpense, setTotalExpense] = useState(undefined);
  const [totalSales, setTotalSales] = useState(undefined);
  const [totalEmployees, setTotalEmployees] = useState(undefined);
  const [totalCustomers, setTotalCustomers] = useState(undefined);
  const [totalOrders, setTotalOrders] = useState(undefined);
  const [totalCompletedOrders, setTotalCompletedOrders] = useState(undefined);


  useEffect(() => {
    fetchData();
  }, []);
  

  // Async function to fetch data from APIs
  const fetchData = async () => {
    try {
      const expenseResponse = await fetch("http://localhost:8080/api/v1/expense/totalSumofExpense");   //API for get summation of expenses
      const salesResponse = await fetch("http://localhost:8080/api/v1/revenue/totalSumofRevenue");   //API for get summation of sales
      const employeeResponse = await fetch("http://localhost:8080/employee/view");                     //API for get summation of employees
      const customerResponse = await fetch("http://localhost:8080/customer/viewCustomer");             //API for get summation of customers
      const totalOrderResponse = await fetch("http://localhost:8080/order/viewOrder");                 //API for get summation of orders
      const totalCompletedOrderResponse = await fetch("http://localhost:8080/order/completedOrderId"); //API for get summation of completed orders


      if (!expenseResponse.ok) {
        throw new Error("Failed to fetch total expense");
      }
      if (!salesResponse.ok) {
        throw new Error("Failed to fetch total revenue");
      }
      if (!employeeResponse.ok) {
        throw new Error("Failed to fetch total employees");
      }
      if (!customerResponse.ok) {
        throw new Error("Failed to fetch total customers");
      }
      if (!totalOrderResponse.ok) {
        throw new Error("Failed to fetch total Order");
      }
      if (!totalCompletedOrderResponse.ok) {
        throw new Error("Failed to fetch total Completed Order");
      }
     
    
      const expenseData = await expenseResponse.json();
      const salesData = await salesResponse.json();
      const employeeData = await employeeResponse.json();
      const customerData = await customerResponse.json();
      const orderData = await totalOrderResponse.json();
      const completedOrderData = await totalCompletedOrderResponse.json();

      setTotalExpense(expenseData.content);
      setTotalSales(salesData.content);
      setTotalEmployees(employeeData.content.length);
      setTotalCustomers(customerData.content.length);
      setTotalOrders(orderData.content.length);
      setTotalCompletedOrders(completedOrderData.content.length);


    } catch (error) {
      console.error("Error fetching data:", error);   //Error in fetching 
    }
  };


  //defined gradient styles for cards
  const gradientStyle = {
    background: "linear-gradient(to right, #3E93FC91, #EFB7C070)"
  };

  const gradientStyle2 = {
    background: "linear-gradient(to right, #FFDDE1, #EE9CA7)"
  };

  const gradientStyle3 = {
    background: "linear-gradient(to right, #E2D1C3, #FDFCFB)"
  };

  
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor: "#d7e3fc"}} >
          <h1>Home</h1>
          <Grid container spacing={7}>
            <CardModel totalvalue={"Rs.  "+(totalExpense/1000000)+"Mn"} cardname={"Total Expenses"} style={gradientStyle}  />
            <CardModel totalvalue={"Rs.  "+(totalSales/1000000)+"Mn"} cardname={"Total Sales"} style={gradientStyle} />
            <CardModel totalvalue={"Rs.  "+(totalSales-totalExpense)/1000000+"Mn"} cardname={"Total Profit"} style={gradientStyle} />
            <CardModel totalvalue={totalEmployees} cardname={"Total Employees"} style={gradientStyle2}  />
            <CardModel totalvalue={totalCustomers} cardname={"Total Customers"} style={gradientStyle2} />
            <CardModel totalvalue={totalOrders} cardname={"Total Orders"} style={gradientStyle2} />
            <CardModel totalvalue={totalCompletedOrders+"/"+totalOrders} cardname={"Order Completion"} style={gradientStyle3}  />
          </Grid>
        </Box>
      </Box>
    </>
  );
}
