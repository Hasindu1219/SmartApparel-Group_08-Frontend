import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import CardModel from "../components/Card";

//function for set values to the cards
export default function Overview() {

  // State variables to hold total values
  const [totalExpense, setTotalExpense] = useState(undefined);
  const [totalRevenue, setTotalRevenue] = useState(undefined);
  const [totalSales, setTotalSales] = useState(undefined);
  const [totalEmployees, setTotalEmployees] = useState(undefined);
  const [totalCustomers, setTotalCustomers] = useState(undefined);
  const [totalSuppliers, setTotalSuppliers] = useState(undefined);

  useEffect(() => {
    fetchData();
  }, []);
  

  // Async function to fetch data from APIs
  const fetchData = async () => {
    try {
      const expenseResponse = await fetch("http://localhost:8080/api/v1/expense/totalSumofExpense");   //API for get summation of expenses
      const revenueResponse = await fetch("http://localhost:8080/api/v1/revenue/totalSumofRevenue");   //API for get summation of revenue
      //const salesResponse = await fetch("http://localhost:8080/api/v1/sales/totalSumofSales");       //API for get summation of sales
      const employeeResponse = await fetch("http://localhost:8080/employee/view");   //API for get summation of employees
      const customerResponse = await fetch("http://localhost:8080/customer/viewCustomer");   //API for get summation of customers
      //const supplierResponse = await fetch("");   //API for get summation of suppliers



      if (!expenseResponse.ok) {
        throw new Error("Failed to fetch total expense");
      }
      if (!revenueResponse.ok) {
        throw new Error("Failed to fetch total revenue");
      }
      /*
      if (!salesResponse.ok) {
        throw new Error("Failed to fetch total sales");
      }*/
      if (!employeeResponse.ok) {
        throw new Error("Failed to fetch total employees");
      }
      if (!customerResponse.ok) {
        throw new Error("Failed to fetch total customers");
      }
      // if (!supplierResponse.ok) {
      //   throw new Error("Failed to fetch total suppliers");
      // }
     
    
      const expenseData = await expenseResponse.json();
      const revenueData = await revenueResponse.json();
      //const salesData = await salesResponse.json();
      const employeeData = await employeeResponse.json();
      const customerData = await customerResponse.json();
     // const supplierData = await employeeResponse.json();


      setTotalExpense(expenseData.content);
      setTotalRevenue(revenueData.content);
      //setTotalSales(salesData.content);
      setTotalEmployees(employeeData.content.length);
      setTotalCustomers(customerData.content.length);
      //setTotalSuppliers(supplierData.content.length);


      console.log(totalExpense);
      console.log(totalRevenue);

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
            <CardModel totalvalue={"Rs.  "+(totalExpense/1000)+"Mn"} cardname={"Total Expenses"} style={gradientStyle}  />
            <CardModel totalvalue={"Rs.  "+(totalRevenue/1000)+"Mn"} cardname={"Total Revenue"} style={gradientStyle} />
            <CardModel totalvalue={"Rs.  "+789456/1000+"Mn"} cardname={"Total Receivables"} style={gradientStyle} />
            <CardModel totalvalue={totalEmployees} cardname={"Total Employees"} style={gradientStyle2}  />
            <CardModel totalvalue={totalCustomers} cardname={"Total Customers"} style={gradientStyle2} />
            <CardModel totalvalue={17} cardname={"Total Suppliers"} style={gradientStyle2} />
            <CardModel totalvalue={22+"/"+25} cardname={"Order Completion"} style={gradientStyle3}  />
          </Grid>
        </Box>
      </Box>
    </>
  );
}
