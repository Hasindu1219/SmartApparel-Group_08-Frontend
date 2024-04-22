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

  useEffect(() => {
    console.log("Fetching total expense...");
    fetchTotalExpense();
  }, []);

  const fetchTotalExpense = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/expense/totalSumofExpense");
      if (!response.ok) {
        throw new Error("Failed to fetch total expense");
      }
      const data = await response.json();
      console.log(data); // Check the structure of the fetched data
      setTotalExpense(data.content); // Update totalExpense state with fetched value
    } catch (error) {
      console.error("Error fetching total expense:", error);
    }
  };

  useEffect(() => {
    console.log("totalExpense updated:", totalExpense);
  }, [totalExpense]); // Run this effect whenever totalExpense changes

  return (
    <Grid container spacing={7}>
      <Grid item xs="auto">
        <Card sx={{ minWidth: 350 }} style={gradientStyle}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography variant="h5" component="div">
              Total Sales
            </Typography>
            <Typography variant="h5">1.5 Mn</Typography>
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
            <Typography variant="h5">2 Mn</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
