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
  const [totalSales, setTotalSales] = useState(undefined);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const expenseResponse = await fetch("http://localhost:8080/api/v1/expense/totalSumofExpense");
      const salesResponse = await fetch("http://localhost:8080/api/v1/revenue/totalSumofRevenue");

      if (!expenseResponse.ok) {
        throw new Error("Failed to fetch total expense");
      }
      if (!salesResponse.ok) {
        throw new Error("Failed to fetch total revenue");
      }
     

      const expenseData = await expenseResponse.json();
      const salesData = await salesResponse.json();

      setTotalExpense(expenseData.content);
      setTotalSales(salesData.content);


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
              <Typography variant="h5">{`Rs.  ${totalSales / 1000000} Mn`}</Typography>
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
              <Typography variant="h5">{`Rs.  ${totalExpense / 1000000} Mn`}</Typography>
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
              Total Profit
            </Typography>
            {/* Conditional rendering based on totalProfit */}
            {totalSales !== undefined ? (
              <Typography variant="h5">{`Rs.  ${(totalSales-totalExpense) / 1000000} Mn`}</Typography>
            ) : (
              <CircularProgress /> // Display loading indicator while totalProfit is undefined
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
