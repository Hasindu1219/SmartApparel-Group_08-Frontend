import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TrendingUpTwoToneIcon from "@mui/icons-material/TrendingUpTwoTone";
import Stack from "@mui/material/Stack";

export default function Employees() {
  return (
    <>
      <Navbar />
      <Box height={40} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Employees</h1>

          {/* Cards */}
          <Grid container spacing={2}>
            <Grid item xs="auto">
              <Card sx={{ minWidth: 350, backgroundColor: "yellow" }}>
                <CardContent style={{ textAlign: "center" }}>
                  <Typography variant="h5" component="div">
                    <TrendingUpTwoToneIcon /> Total Employees
                  </Typography>
                  <Typography variant="h5" >
                    5
                  </Typography>
                  {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>

                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography> */}
                </CardContent>

                {/* <CardActions sx={{ float: "right" }}>
                  <Button size="small">
                    More
                    <ArrowForwardIosIcon />
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>

            <Grid item xs="auto">
              <Card sx={{ minWidth: 350, backgroundColor: "yellow" }}>
                <CardContent style={{ textAlign: "center" }}>
                  <Typography variant="h5" component="div">
                    <TrendingUpTwoToneIcon /> Today Working
                  </Typography>
                  <Typography variant="h5" >
                    5
                  </Typography>
                  {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>

                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography> */}
                </CardContent>

                {/* <CardActions sx={{ float: "right" }}>
                  <Button size="small">
                    More
                    <ArrowForwardIosIcon />
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>

            <Grid item xs="auto">
              <Card sx={{ minWidth: 350, backgroundColor: "yellow" }}>
                <CardContent style={{ textAlign: "center" }}>
                  <Typography variant="h5" component="div">
                    <TrendingUpTwoToneIcon /> Today Absant
                  </Typography>
                  <Typography variant="h5" >
                    0
                  </Typography>
                  {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>

                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography> */}
                </CardContent>

                {/* <CardActions sx={{ float: "right" }}>
                  <Button size="small">
                    More
                    <ArrowForwardIosIcon />
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          </Grid>

          <Box height={30} />

          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card
                sx={{
                  height: 60 + "vh",
                  minWidth: 1000,
                  backgroundColor: "yellow",
                }}
              ></Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
