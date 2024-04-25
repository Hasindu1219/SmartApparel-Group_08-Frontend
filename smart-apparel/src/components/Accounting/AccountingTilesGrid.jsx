import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress"; // Import CircularProgress component

const gradientStyle = {
  background: "linear-gradient(to right, #3E93FC91, #EFB7C070)"
};

export default function AccountingTiles() {
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

      console.log(expenseData.content);
      console.log(revenueData.content);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Grid container spacing={7}>
      <Grid item xs="auto">
        <Card sx={{ minWidth: 350 }} style={gradientStyle}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography variant="h5" component="div">
              Total Sales
            </Typography>
            {/* Conditional rendering based on totalSales */}
            {totalSales !== undefined ? (
              <Typography variant="h5">{`${totalSales / 1000000} Mn`}</Typography>
            ) : (
              <CircularProgress /> // Display loading indicator while totalSales is undefined
            )}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs="auto">
        <Card sx={{ minWidth: 350 }} style={gradientStyle}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography variant="h5" component="div">
              Total Expenses
            </Typography>
            {/* Conditional rendering based on totalExpense */}
            {totalExpense !== undefined ? (
              <Typography variant="h5">{`${totalExpense / 1000000} Mn`}</Typography>
            ) : (
              <CircularProgress /> // Display loading indicator while totalExpense is undefined
            )}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs="auto">
        <Card sx={{ minWidth: 350 }} style={gradientStyle}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography variant="h5" component="div">
              Total Revenue
            </Typography>
            {/* Conditional rendering based on totalRevenue */}
            {totalRevenue !== undefined ? (
              <Typography variant="h5">{`${totalRevenue / 1000000} Mn`}</Typography>
            ) : (
              <CircularProgress /> // Display loading indicator while totalRevenue is undefined
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
