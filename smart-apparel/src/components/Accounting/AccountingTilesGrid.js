import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpTwoToneIcon from "@mui/icons-material/TrendingUpTwoTone";


const gradientStyle = {
  background: "linear-gradient(to right, #2980B9, #6DD5FA)", // Gradient colors
};


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3} sx={{ margin: 'auto' }}>
            <Card sx={{ maxWidth: 350 }} style={gradientStyle}>
                <CardContent style={{ textAlign: "center" }}>
                  <Typography variant="h5" component="div">
                   <TrendingDownIcon /> Total Sales
                  </Typography>
                  <Typography variant="h5">1.5Mn</Typography>
                </CardContent>
              </Card>
        </Grid>
        <Grid item xs={3} sx={{ margin: 'auto' }}>
            <Card sx={{ maxwidth: 300 }} style={gradientStyle}>
                <CardContent style={{ textAlign: "center" }}>
                  <Typography variant="h5" component="div">
                   <TrendingUpTwoToneIcon /> Total Expenses
                  </Typography>
                  <Typography variant="h5">0.8Mn</Typography>
                </CardContent>
              </Card>
        </Grid>
        <Grid item xs={3} sx={{ margin: 'auto' }}>
            <Card sx={{ maxWidth: 350 }} style={gradientStyle}>
                <CardContent style={{ textAlign: "center" }}>
                  <Typography variant="h5" component="div">
                   <TrendingDownIcon /> Total Revenue
                  </Typography>
                  <Typography variant="h5">2Mn</Typography>
                </CardContent>
              </Card>
        </Grid>
      </Grid>
    </Box>
  );
}