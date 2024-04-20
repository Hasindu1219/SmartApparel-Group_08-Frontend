import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const gradientStyle = {
  background: "linear-gradient(to right, #3E93FC91, #EFB7C070)", 
};



export default function AccountingTiles() {
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
            <Typography variant="h5">0.5 Mn</Typography>
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