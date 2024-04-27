import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EmployeeTable4 from "../../components/EmployeeComponent/EmployeeTable4";
import { useNavigate } from "react-router-dom";

const gradientStyle = {
  background: "linear-gradient(to right, #2980B9, #6DD5FA)", // Gradient colors
};


export default function Employees() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Employees</h1>

          {/* Cards */}
          <Grid container spacing={2}>
            <Grid item xs="auto">
              <Card sx={{ minWidth: 350 }} style={gradientStyle}>
                <CardContent style={{ textAlign: "center" }}>
                  <Typography variant="h5" component="div">
                    Total Employees
                  </Typography>
                  <Typography variant="h5">5</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs="auto">
              <Card sx={{ minWidth: 350 }} style={gradientStyle}>
                <CardContent style={{ textAlign: "center" }}>
                  <Typography variant="h5" component="div">
                    Today Working
                  </Typography>
                  <Typography variant="h5">5</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs="auto">
              <Card sx={{ minWidth: 350 }} style={gradientStyle}>
                <CardContent style={{ textAlign: "center" }}>
                  <Typography variant="h5" component="div">
                    Total Employees
                  </Typography>
                  <Typography variant="h5">0</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box height={30} />

          

          <EmployeeTable4 />
          

          {/* <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{minHeight: 60 + "vh",minWidth: 1090,background: 'linear-gradient(to top left, #ccffff 0%, #ffffff 100%)'}}>
                
                <CardContent style={{ textAlign: "center" }}>
                  <CustomizedTables />
                  <EmployeeTable/>
                  <EmployeeTable2/>
                  <EmployeeTable3/>
                  <ColorButtons />

                </CardContent>
              </Card>
            </Grid>
          </Grid> */}
          
        </Box>
      </Box>
    </>
  );
}
