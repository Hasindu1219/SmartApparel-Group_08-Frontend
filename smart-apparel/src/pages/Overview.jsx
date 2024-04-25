import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import CardModel from "../components/Card";


export default function Overview() {


  const [totalExpense, setTotalExpense] = useState(undefined);
  const [totalRevenue, setTotalRevenue] = useState(undefined);
  const [totalSales, setTotalSales] = useState(undefined);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const expenseResponse = await fetch("http://localhost:8080/api/v1/expense/totalSumofExpense");
      const revenueResponse = await fetch("http://localhost:8080/api/v1/revenue/totalSumofRevenue");
      //const salesResponse = await fetch("http://localhost:8080/api/v1/sales/totalSumofSales");

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

      const expenseData = await expenseResponse.json();
      const revenueData = await revenueResponse.json();
      //const salesData = await salesResponse.json();

      setTotalExpense(expenseData.content);
      setTotalRevenue(revenueData.content);
      //setTotalSales(salesData.content);

      console.log(totalExpense);
      console.log(totalRevenue);



    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  const gradientStyle = {
    background: "linear-gradient(to right, #3E93FC91, #EFB7C070)"
  };

  const gradientStyle2 = {
    background: "linear-gradient(to right, #354781, #EFB77870)"
  };

  const gradientStyle3 = {
    background: "linear-gradient(to right, #3E97891, #EFB7C020)"
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
            <CardModel totalvalue={totalExpense} cardname={"Total Expenses"} style={gradientStyle}  />
            <CardModel totalvalue={totalRevenue} cardname={"Total Revenue"} style={gradientStyle2} />
            <CardModel totalvalue={789546} cardname={"Total Receivables"} style={gradientStyle3} />
            <CardModel totalvalue={150000} cardname={"Total Expenses"} style={gradientStyle}  />
            <CardModel totalvalue={445200} cardname={"Total Revenue"} style={gradientStyle2} />
            <CardModel totalvalue={789546} cardname={"Total Receivables"} style={gradientStyle3} />
            <CardModel totalvalue={150000} cardname={"Total Expenses"} style={gradientStyle}  />
            <CardModel totalvalue={445200} cardname={"Total Revenue"} style={gradientStyle2} />
            <CardModel totalvalue={789546} cardname={"Total Receivables"} style={gradientStyle3} />
          </Grid>
        </Box>
      </Box>
    </>
  );
}
